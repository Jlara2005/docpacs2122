const express = require('express');
const ejs = require('ejs');
const fs = require('fs');
var app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extended: true}))

studentData = JSON.parse(fs.readFileSync("data.json"))
class Student{
  constructor(name,sequence){
    this.name = name;
    this.id = sequence;
    this.balance = 0
  }
}


app.get("/view",function(req,res){
  if (req.query.studentid) {
    if (studentData.students.find(function(ids){
      if (ids.id == req.query.studentid) {
        return true
      }
    })) {
      res.render("view",{
        input: req.query.studentid
      } )
    } else {
      res.render("view",{
        input: "Student not valid "
      } )
    }

  } else {
  res.render("view",{
    input: studentData
  } ) }

})

app.get("/new",function(req,res){
  res.render("new",{
    input:" "
  })

})
app.post("/new",function(req,res){
  if (req.body.studentName) {
    studentData.students.push(new Student(req.body.studentName,studentData.sequence++))
    fs.writeFileSync("data.json",JSON.stringify(studentData))
  } else{
    res.render("view",{
      input:" Student not valid"
    })
  }
})

app.post("/edit",function(req,res){
  if (studentData.students.find(function(ids){
    if (ids.id == req.body.id) {
      return true
    }
  })) {

    if (req.body.action == "add") {
      studentData.students[req.body.id].balance += Number(req.body.change)
      fs.writeFileSync("data.json",JSON.stringify(studentData))
        console.log("add");
    } else {
      studentData.students[req.body.id].balance -= Number(req.body.change)
      fs.writeFileSync("data.json",JSON.stringify(studentData))
      console.log("sub");
    }
  } else {
    res.render("view",{
      input:" Student not valid"
    })
  }
})


//{"students":[] , "sequence":0}








app.listen(8000)
