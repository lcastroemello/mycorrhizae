const express = require("express");
const app = express();
const compression = require("compression");
const ca = require("chalk-animation");
const bcrypt = require("bcryptjs");
const db = require("./sql/db");
const cookieSession = require("cookie-session");
const csurf = require("csurf");

app.use(express.static("./static"));

app.use(
    cookieSession({
        secret: "its gonna be ok",
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(csurf());

app.use(function(req, res, next) {
    res.cookie("mytoken", req.csrfToken());
    next();
});

const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//---------------BCRYPT functions-----------------
function hashPassword(plainTextPassword) {
    return new Promise(function(resolve, reject) {
        bcrypt.genSalt(function(err, salt) {
            if (err) {
                return reject(err);
            }
            bcrypt.hash(plainTextPassword, salt, function(err, hash) {
                if (err) {
                    return reject(err);
                }
                resolve(hash);
            });
        });
    });
}

function checkPassword(textEnteredInLoginForm, hashedPasswordFromDatabase) {
    return new Promise(function(resolve, reject) {
        bcrypt.compare(
            textEnteredInLoginForm,
            hashedPasswordFromDatabase,
            function(err, doesMatch) {
                if (err) {
                    reject(err);
                } else {
                    resolve(doesMatch);
                }
            }
        );
    });
}

// -----------------------RENDERING THE PAGE-----------------

app.get("/welcome", function(req, res) {
    if (!req.session.userId) {
        res.redirect("/");
    } else {
        res.sendFile(__dirname + "/index.html");
    }
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// ------------------REGISTERING NEW USERS-------------------

app.post("/Register", function(req, res) {
    const {
        first,
        last,
        email,
        pass,
        confpass,
        group_classes: group
    } = req.body;
    if (pass === confpass) {
        hashPassword(pass)
            .then(hash => {
                return db.addUser(first, last, email, hash, group);
            })
            .then(data => {
                req.session.userId = data.rows[0].id;
                console.log(data.rows[0].id);
                res.json({ success: true });
            })
            .catch(err => {
                console.log("register post err", err);
                res.json({ success: false });
            });
    } else {
        res.json({ success: false });
    }
});

//-------------------USER LOGIN-----------------------------

app.post("/Login", function(req, res) {
    db.getUserByEmail(req.body.email)
        .then(info => {
            checkPassword(req.body.pass, info.rows[0].password_digest).then(
                boolean => {
                    req.session.userId = info.rows[0].id;
                    res.json({ success: true });
                }
            );
        })
        .catch(err => {
            console.log("login post err", err);
            res.json({ success: false });
        });
});

// ------------------STARTING OUR SERVER---------------------

app.listen(8080, function() {
    ca.neon("Reacting to your wishes hon");
});
