import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import '@/lib/initdb'
import bcrypt from 'bcryptjs'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()
  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email)
  if (!user) return NextResponse.json({ error: 'Invalid' }, { status: 401 })
  const ok = await bcrypt.compare(password, user.senha_hash)
  if (!ok) return NextResponse.json({ error: 'Invalid' }, { status: 401 })
  // simple sessionless token (insecure, but for demo)
  return NextResponse.json({ success: true })
}
