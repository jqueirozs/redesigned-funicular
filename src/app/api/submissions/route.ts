import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import '@/lib/initdb'

export async function POST(req: NextRequest) {
  const data = await req.json()
  const stmt = db.prepare(`INSERT INTO submissions (nome, email, link_negocio, descricao, faixa_faturamento, historia) VALUES (@nome, @email, @link_negocio, @descricao, @faixa_faturamento, @historia)`)
  const result = stmt.run(data)
  return NextResponse.json({ id: result.lastInsertRowid })
}

export async function GET() {
  const subs = db.prepare('SELECT * FROM submissions ORDER BY id DESC').all()
  return NextResponse.json(subs)
}
