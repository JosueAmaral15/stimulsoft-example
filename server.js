

Addons
var express = require("express");
var opn = require("opn");
var app = express();

app.use("/css", express.static(__dirname + "/css"));
app.use("/scripts", express.static(__dirname + "/scripts"));
app.use("/reports", express.static(__dirname + "/reports"));

app.get("/", function(req, res) {
	res.sendfile("index.html");
});

app.listen(8080);
opn("http://localhost:8080")
