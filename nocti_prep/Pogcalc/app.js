const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))
//start

var champs = JSON.parse(fs.readFileSync('Pogchamps.json'))
champs.forEach((champ, i) => {
  console.log(champ.lastWin);

});
