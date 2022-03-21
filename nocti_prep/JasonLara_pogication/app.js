const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
var app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

studentData = JSON.parse(fs.readFileSync("data.json"))
class Student{
  constructor(name,seqeunce){
    this.name = name;
    this.id = sequence;
    this.balance = 0
  }
}

function find(){
  for (var student in studentid) {
    if (object.hasOwnProperty(variable)) {

    }
  }
}
app.get("/view",function(req,res){
  if (req.query.studentid) {

  }
  res.render("view",{




  })
})












app.listen(8000)
