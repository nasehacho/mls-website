const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
// 55ba441a-c29b-471e-ac71-a12145b86a8a
  try {
    console.log("trying")
    const r = await axios.put (
        "https://api.chatengine.io/users/",
        {username : username, secret: username, first_name: username },
        {headers: {"PRIVATE-KEY": "55ba441a-c29b-471e-ac71-a12145b86a8a"}}
    )
    // console.log("r = ", r.status)
    return res.status(r.status).json(r.data);
  } catch(e) {
    // console.log("errors")
    return res.status(e.response);
  }

  return res.json({username : username, secret: "red"})
});

app.listen(3001);