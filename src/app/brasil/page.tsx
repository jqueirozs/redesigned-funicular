import db from '@/lib/db'
import '@/lib/initdb'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default function BrasilPage() {
  const stories = db.prepare("SELECT id, titulo, descricao_curta FROM stories WHERE pais = 'Brasil' ORDER BY id DESC").all()
  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Histórias do Brasil</h1>
      <ul className="space-y-4">
        {stories.map((s: any) => (
          <li key={s.id} className="border p-4 rounded">
            <Link href={`/stories/${s.id}`} className="font-semibold">{s.titulo}</Link>
            <p>{s.descricao_curta}</p>
          </li>
        ))}
      </ul>
      <Link href="/" className="underline">← Voltar</Link>
    </main>
  )
}
