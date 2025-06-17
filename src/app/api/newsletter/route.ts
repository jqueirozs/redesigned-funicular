import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import '@/lib/initdb'

export async function POST(req: NextRequest) {
  const { email } = await req.json()
  const stmt = db.prepare('INSERT INTO newsletter (email, data_inscricao) VALUES (?, datetime("now"))')
  stmt.run(email)
  return NextResponse.json({ success: true })
}
