//const express = require('express')
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password:"leonardo",
    database:"sitcon"
})
//Pacientes
app.get('/pacientes/:id', (req, res)=>{
    const sql = 'SELECT `pacientes`.* FROM `pacientes` WHERE `id` = ?'
    const param = req.params.id
    db.query(sql, param, (err, data) => {
        if(err) {
            return res.json({Error: "The GET method has not been defined for individual resources"})
        }
        return res.json(data)
    })
})

app.get('/pacientes', (req, res)=>{
    const sql = "SELECT `pacientes`.* FROM `pacientes` WHERE nome LIKE ? AND `cpf` = ? ORDER BY `nome` ASC"
    const params = ['%'+req.query.nome+'%', req.query.cpf]
    db.query(sql, params, (err, data) => {
        if(err) {
            return res.json({Error: "The GET method has not been defined for collections"})
        }
        return res.json(data)
    })
})






app.listen(3030, ()=>{
    console.log('Logado')
})