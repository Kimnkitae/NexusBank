const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const app = express()   
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '971396462468mX!',
    database: 'users'
})

db.connect((error) => {
    if (error) {
        console.log('Ошибка подключения:', error)
        return
    }
    console.log('БД подключена')
})


app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(results)
    })
})


app.post('/users', (req, res) => {
    const { name } = req.body

    if (!name) return res.status(400).json({ error: 'Имя не может быть пустым' })

    db.query('INSERT INTO users (name) VALUES (?)', [name], (err, result) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json({ id: result.insertId, name })
    })
})

app.listen(3001, () => console.log('Сервер запущен на порту 3001'))