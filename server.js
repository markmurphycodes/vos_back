const express = require("express");
const SocketService = require("./SocketService");
const app = express();
const server = require("http").Server(app);
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

//const users = require('./routes/api/users');
//const { checkToken } = require('./middleware/auth');

//const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
//mongoose.connect(mongoUri, {
//  useNewUrlParser: true,
//  useUnifiedTopology: true,
//  useCreateIndex: true,
//  useFindAndModify: false,
//});

app.use(bodyParser.json());
//app.use(checkToken)
//app.use("/api/users",users)

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const socketPort = 8080;

server.listen(socketPort, () => {
  console.log(`Server listening on port ${socketPort}`);
  const socketService = new SocketService();

  socketService.attachServer(server);
});
