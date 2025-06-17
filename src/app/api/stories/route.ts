import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import '@/lib/initdb'

export async function GET() {
  const stories = db.prepare('SELECT * FROM stories ORDER BY id DESC').all()
  return NextResponse.json(stories)
}

export async function POST(req: NextRequest) {
  const data = await req.json()
  const stmt = db.prepare(`INSERT INTO stories (titulo, descricao_curta, pais, modelo_negocio, faixa_faturamento, como_comecou, desafios, estrategias, modelo_atual, aprendizados, links, data_publicacao) VALUES (@titulo, @descricao_curta, @pais, @modelo_negocio, @faixa_faturamento, @como_comecou, @desafios, @estrategias, @modelo_atual, @aprendizados, @links, datetime('now'))`)
  const result = stmt.run(data)
  return NextResponse.json({ id: result.lastInsertRowid })
}
