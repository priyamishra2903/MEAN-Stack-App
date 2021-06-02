const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./server/DB/Conncection");
const app = express();
const http = require("http").createServer(app);
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
const jwt = require("jsonwebtoken");
require("dotenv").config();
var server = require("ws").Server;
var s = new server({ port: 5001 });

//socket connection
s.on("connection", function (ws) {
  console.log("connection made");
  ws.on("message", function (message) {
    console.log("Received:" + message);
    s.clients.forEach(function e(client) {
      console.log("INSIDE COLLEGF");
      if (client != ws) client.send("Other client : " + message);
      else client.send("You: " + message);
    });
  });

  ws.on("close", function () {
    console.log("I lost a client");
  });
  console.log("one more client connected");
});

connectDB();
app.use(bodyParser.json());

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport config
require("./server/config/passport")(passport);

const StudentRoute = require("./server/Routes/Student");
const SchoolRoute = require("./server/Routes/School");
const UserRoute = require("./server/Routes/User");

app.use(cors());

//middlewares

app.use(
  "/api/student",
  passport.authenticate("jwt", { session: false }),
  StudentRoute
);
app.use(
  "/api/school",
  passport.authenticate("jwt", { session: false }),
  SchoolRoute
);
app.use("/api/user", UserRoute);

const Port = process.env.Port || 3000;

app.listen(Port, () => console.log("Server started"));
