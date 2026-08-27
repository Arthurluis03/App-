import mysql2 from 'mysql2/promise'

import dotenv from 'dotenv'


dotenv.config()

// conexao é uma ponte direta entre o vs code e o mysql 

const conexao = mysql2.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 20,
    queueLimit: 0,
    waitForConnections: true
})


export default conexao 


