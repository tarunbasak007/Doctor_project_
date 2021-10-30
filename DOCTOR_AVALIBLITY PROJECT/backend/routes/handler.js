const express = require("express");
const router = express.Router();

router.get("/tweets", (req, res) => {
  const str = [
    {
      name: "Samantha ray",
      msg: "This Doctor was Awsome",
      username: "R_Samantha",
    },
    {
      name: "Rahul_dey",
      msg: "When Orthopathy will available",
      username: "Dey rahul",
    },
    {
      name: "Santosh kumar",
      msg: "Dr. jhon did a great job with my first ever health exam.",
      username: "S_kumar",
    },
  ];
  res.end(JSON.stringify(str));
});

router.post("/addTweet", (req, res) => {
  res.end("NA");
});

module.exports = router;
