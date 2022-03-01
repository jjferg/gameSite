import express from "express";
import axios from "axios";
import fetch from "node-fetch";

const app = express();

fetch("https://api.twitch.tv/helix/users?login=hullagahn", {
  headers: {
    Accept: "application/vnd.twitchtv.v5+json",
    Authorization: "Bearer mkld15wi1ydjugfh9aais2uu20cpnv",
    "Client-Id": "7s8focd6za4eodq2al6ugvgrrqhjur",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// async function getData() {
//         const config = {
//           method: "get",
//           url: "https://api.twitch.tv/helix/users?id=141981764",
//           headers: {
//             'Accept': "application/vnd.twitchtv.v5+json",
//             'Authorization': "OAuth mkld15wi1ydjugfh9aais2uu20cpnv",
//             "Client-ID": "7s8focd6za4eodq2al6ugvgrrqhjur",
//           },
//         };
//         let data = await axios(config);
//         console.log(data);
//     }

// getData();

app.listen(5000, () => console.log("Example app listening on port 5000!"));
