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
