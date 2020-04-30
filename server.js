var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride("_method"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./routes/handlers");

app.use("/",routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});