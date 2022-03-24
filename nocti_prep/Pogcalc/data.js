const fs = require('fs');
const express = require('express');
const ejs = require('ejs');
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

var champ = ["larry","jeff","bob","Boy","key","sky","julian","yazmin","jason","Natalie","zenaida","Jorge","Issac","shawn","Bill","tokyo","Jesica","jasmine","king","meliodas"]


var champData =[]
 class Pogchamp {
   constructor() {
     this.name = champ[Math.floor(Math.random() * 20)] + " " + champ[Math.floor(Math.random() * 20)]
     this.lastWin = Math.floor(Math.random() * (Date.now() - 631152000000) + 631152000000)
     this.pogsOwned = Math.floor(Math.random() * 101)
   }
 }

for (var i = 0; i < 100; i++) {
  champData.push(new Pogchamp)
}

fs.writeFileSync("Pogchamps.json", JSON.stringify(champData));
