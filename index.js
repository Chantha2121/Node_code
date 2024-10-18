const express = require('express')
const { result } = require('lodash')
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database:'nodemysql'
})
db.connect(err =>{
    if(err){
        throw err
    }
    console.log("Mysql is connected");
})
const app = express()
// Create database
app.get('/createdb',(req,res)=>{
    let sql = "CREATE DATABASE nodemysql"
    db.query(sql, err=>{
        if(err){
            throw err
        }
        res.send("Database created");
    })
})
// Create Table
app.get('/createemployee', (req,res)=>{
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name varchar(255), designation varchar(255), PRIMARY KEY (id))"
    db.query(sql, err=>{
        if(err){
            throw err
        }
        res.send("Table employee created")
    })
})
// Insert Date in Table
app.get('/employee1', (req, res)=>{
    let post = {name:'Smos boy', designation:'Software Engineer'}
    let sql = "INSERT INTO employee SET ?"
    let query = db.query(sql, post, err=>{
        if(err){
            throw err
        }
        res.send('employee added.')
    })

})
// Display data in the table employee
app.get('/getemployee', (req, res) =>{
    let sql = "SELECT * FROM employee"
    let query = db.query(sql, (err, result)=>{
        if (err) {
            throw err
        }
        console.log(result);
        res.send("Diplayed employee")
    })
})
// Update employee
app.get('/updateemployee/:id', (req, res) =>{
    let newName = "Boy loy"
    let sql = `UPDATE employee SET name = '${newName}' WHERE id = ${req.params.id}`
    let query = db.query(sql, err=>{
        if(err){
            throw err
        }
        res.send("employee updated")
    })
})
// Delete the employee
app.get('/deleteemployee/:id', (req, res) => {
    let sql = `DELETE FROM employee WHERE id = ${req.params.id}`
    let query = db.query(sql, err=>{
        if(err){
            throw err
        }
        res.send("employee deleted")
    })
})
app.listen('3000',()=>{
    console.log("Server started on the port 3000"); 
})