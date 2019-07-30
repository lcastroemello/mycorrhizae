const spicedPg = require("spiced-pg");
let db;

// if (process.env.DATABASE_URL) {
//     db = spicedPg(process.env.DATABASE_URL);
// } else {
db = spicedPg(`postgres:postgres:postgres@localhost:5432/socialmedia`);
// }

//-------ADDING info to tables-------------

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
//--------GETTING INFO from tables--------------

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
