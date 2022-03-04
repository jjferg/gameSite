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

app.get("/hey", (req, res) => {
  res.send("Hello World");
});

fetch("https://api.twitch.tv/helix/users?login=hullagahn", {
  headers: {
    Accept: "application/vnd.twitchtv.v5+json",
    Authorization: "Bearer mkld15wi1ydjugfh9aais2uu20cpnv",
    "Client-Id": "7s8focd6za4eodq2al6ugvgrrqhjur",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server started in ${process.env.NODE_ENV} on Port ${PORT}`.yellow.bold
  )
);
