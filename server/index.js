const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')
const { restart } = require('nodemon')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001

app.get("/",async function (req,res) {
    try {
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('select * from info')

        if (!result) result=[]
        res.status(200).json(result)
    } catch(err) {
        res.status(500).send({error: err.message})
    }
})

app.post("/new",async function(req,res) {
    try{
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('insert into info (description) values (?) ',[req.body.description])
        res.status(200).json({id:result.insertId})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.delete("/delete/:id",async function(req,res) {
    try {
        const connection = await mysql.createConnection(config.db)
        await connection.execute('delete from info where id = ? ',[req.params.id])
        res.status(200).json({is:req.params.id})
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

app.listen(port)