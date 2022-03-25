const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended: true}))
//start


var loser = []
var winner = []
var totalpogs = 0
var averagepogs = 0
var timelapse = []
var averagetimelapse = 0
var totaltimelapse = 0
var winners2000 = []
var pwinners2000 = 0

var champs = JSON.parse(fs.readFileSync('Pogchamps.json'))
champs.forEach((champ, i) => {

    timelapse[i] = Date.now() - champ.lastWin;
    totaltimelapse += timelapse[i]

    if (champ.lastWin > 631152000000 ) {
      winner.push(champ.name)
    } else {
      loser.push(champ.name)
    }
    totalpogs += champ.pogsOwned
    if (champ.lastWin > 946688400000) {
      winners2000.push(champ.name)
    }


});
averagepogs = totalpogs/champs.length
averagetimelapse = totaltimelapse/champs.length
pwinners2000 = winners2000.length/champs.length*100 + "%"
console.log(totalpogs);
console.log(averagepogs);
console.log(averagetimelapse);
console.log(pwinners2000);
