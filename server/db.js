import { createPool } from "mysql2/promise";

const pool = createPool({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || '3306',
    user: process.env.USER || 'root',
    password: process.env.PASSWORD || '',
    database: process.env.DATABASE || 'crucigrama'
})

export default pool;