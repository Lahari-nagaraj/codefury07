// Import required modules
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const ejsMate = require("ejs-mate");

// Initialize Express app
const app = express();
const port = 8080; // Use environment variable for port if available

// Create MySQL connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  database: "ieee",
  password: "adarsh1947",
  port: 3306,
});

// Middleware setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);

app.get("/", (req, res) => {
  res.render("./file/home.ejs");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
