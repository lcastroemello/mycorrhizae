const spicedPg = require("spiced-pg");
let db;

// if (process.env.DATABASE_URL) {
//     db = spicedPg(process.env.DATABASE_URL);
// } else {
db = spicedPg(`postgres:postgres:postgres@localhost:5432/socialmedia`);
// }

//-------ADDING info to users-------------

exports.addUser = function addUser(
    first_name,
    last_name,
    email,
    password,
    group_tag
) {
    // console.log("db addSignature works");
    return db.query(
        "INSERT INTO users (first, last, email, password_digest, group_tag) VALUES ($1, $2, $3, $4, $5) RETURNING id",
        [first_name, last_name, email, password, group_tag]
    );
};

exports.updateImg = function updateImg(url, id) {
    return db.query("UPDATE users SET picture = $1 WHERE id=$2", [url, id]);
};

exports.updateBio = function updateBio(bio, id) {
    return db.query("UPDATE users SET bio = $1 WHERE id=$2", [bio, id]);
};
//--------GETTING INFO from users--------------

exports.getUserByEmail = function getUserbyEmail(email) {
    return db.query("SELECT * FROM users WHERE email=$1", [email]);
};

exports.getUserById = function getUserById(id) {
    return db.query(
        "SELECT id, first, last, group_tag, picture, bio FROM users WHERE id=$1",
        [id]
    );
};

exports.getLastUsersList = function getLastUsersList() {
    return db.query(
        "SELECT id, first, last, group_tag, picture FROM users ORDER BY id DESC LIMIT 3"
    );
};

exports.getUsersInSearch = function getUsersInSearch(val) {
    return db.query(
        `SELECT id, first, last, group_tag, picture FROM users WHERE first ILIKE $1 ORDER by first ASC`,
        [val + "%"]
    );
};

//--------------------GETTING INFO from frienships---------------------

exports.getFriendshipStatus = function getFriendshipStatus(
    sender_id,
    receiver_id
) {
    return db.query(
        "SELECT * FROM friendships WHERE (sender_id =$1 AND receiver_id=$2) OR (sender_id=$2 AND receiver_id=$1)",
        [sender_id, receiver_id]
    );
};

//-----------------ADDING INFO to friendships-------------------------

exports.addFriendship = function addFriendship(sender_id, receiver_id) {
    return db.query(
        "INSERT INTO friendships (sender_id, receiver_id) VALUES ($1, $2) RETURNING accepted",
        [sender_id, receiver_id]
    );
};

exports.deleteFriendship = function deleteFriendship(sender_id, receiver_id) {
    return db.query(
        "DELETE FROM friendships WHERE sender_id = $1 AND receiver_id = $2",
        [sender_id, receiver_id]
    );
};

exports.acceptFriendship = function acceptFriendship(sender_id, receiver_id) {
    return db.query(
        "UPDATE friendships SET accepted = true WHERE sender_id = $1 AND receiver_id = $2",
        [sender_id, receiver_id]
    );
};
