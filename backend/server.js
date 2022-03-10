import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import colors from "colors";
import axios from "axios";
import fetch from "node-fetch";

dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.get("/hey/:twitchName", (req, res) => {
  const { twitchName } = req.params;
  console.log(req.params)
  fetch(`https://api.twitch.tv/helix/streams?user_login=${twitchName}`, {
    headers: {
      Accept: "application/vnd.twitchtv.v5+json",
      Authorization: process.env.AUTHORIZATION_TWITCH_API_BEARER_TOKEN,
      "Client-Id": process.env.CLIENT_ID_TWITCH_API,
    },
  })
    .then((response) => response.json())
    .then((data) => res.send(data));
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server started in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold
  )
);
