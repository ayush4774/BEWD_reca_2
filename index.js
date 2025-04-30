const express = require('express');
require('dotenv').config;

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json())

app.get("/",(req,res) => {
  res.send("<h1>Welcome to my ca</h1>")
})

app.post('/signup',(req,res) => {
  const { username, age, email} = req.body;

  if(!username || !age || !email){
    res.send(400).json({ error: "fill all the required fields"})
  } else if(username.length <= 0){
    res.send(400).json({ error: "username cannot be empty"})
  } else if(age.length <= 0){
    res.send(400).json({ error: "age cannot be zero"})
  } else if(email.length <= 0){
    res.send(400).json({ error: "email cannot be empty"})
  }

  res.send(200).json({
    "message":"user registered sucessfully"
  });

});

app.listen(PORT, () => {
  console.log(`server running on PORT:${PORT}`)
});