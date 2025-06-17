import { NextRequest, NextResponse } from 'next/server'
import db from '@/lib/db'
import '@/lib/initdb'

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const story = db.prepare('SELECT * FROM stories WHERE id = ?').get(params.id)
  if (!story) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json(story)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const data = await req.json()
  const stmt = db.prepare(`UPDATE stories SET titulo=@titulo, descricao_curta=@descricao_curta, pais=@pais, modelo_negocio=@modelo_negocio, faixa_faturamento=@faixa_faturamento, como_comecou=@como_comecou, desafios=@desafios, estrategias=@estrategias, modelo_atual=@modelo_atual, aprendizados=@aprendizados, links=@links WHERE id=@id`)
  stmt.run({ ...data, id: params.id })
  return NextResponse.json({ success: true })
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  db.prepare('DELETE FROM stories WHERE id = ?').run(params.id)
  return NextResponse.json({ success: true })
}
