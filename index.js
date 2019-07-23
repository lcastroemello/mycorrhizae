const express = require("express");
const app = express();
const compression = require("compression");
const ca = require("chalk-animation");

app.use(express.static("./static"));

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

// app.get("/welcome", function(req, res) {
//     if (req.session.userId) {
//         res.redirect("/");
//     } else {
//         res.sendFile(__dirname + "/welcome");
//     }
// });

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    ca.neon("Reacting to your love, sweetie");
});
