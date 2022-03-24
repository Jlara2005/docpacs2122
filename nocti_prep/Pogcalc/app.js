const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))
//start


var loser = []
var winner = []
var pogs = 0
var averagepogs = 0
var timelapse = []
var averagetimelapse = 0
var totaltimelapse = 0
var winners2000 = []


var champs = JSON.parse(fs.readFileSync('Pogchamps.json'))
champs.forEach((champ, i) => {

    timelapse[i] = Date.now() - champ.lastWin;
    totaltimelapse += timelapse[i]

    if (timelapse < 631152000000 ) {
      winner.push(champ.name)
    } else {
      loser.push(champ.name)
    }
    pogs += champ.pogsOwned
    if (timelapse < 946688400000) {
      winners2000.push(champ.name)
    }
    console.log(loser);

});
