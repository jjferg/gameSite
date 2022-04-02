import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import axios from "axios";
import fetch from "node-fetch";
import path from "path";

const __dirname = path.resolve();
const app = express();

dotenv.config();
app.use(express.json());

if(process.env.NODE_ENV === "production") {
  app.use(express.static(__dirname,'/frontend/build/'))
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.get("/hey/:twitchName", (req, res) => {
  const { twitchName } = req.params;
  console.log(req.params)
  fetch(`https://api.twitch.tv/helix/users?login=${twitchName}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      Authorization: process.env.AUTHORIZATION_TWITCH_API_BEARER_TOKEN,
      "Client-Id": process.env.CLIENT_ID_TWITCH_API,
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data));
});
console.log(process.env.NODE_ENV)
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server started in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold
  )
);
