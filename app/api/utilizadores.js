import { createConnection } from '../database/db.js'
import { NextResponse } from 'next/server'

export default async function GET() {
    try {
        const db = await createConnection()
        const sql = 'SELECT * FROM utilizadores'
        const [rows] = await db.query(sql)
        return NextResponse.json(rows)
    } catch (error) {
        console.error(error)
        return NextResponse.json({error: error.message})
    }
}