import Link from 'next/link'
import db from '@/lib/db'
import '@/lib/initdb'

export const dynamic = 'force-dynamic'

export default function Home() {
  const stories = db.prepare('SELECT id, titulo, descricao_curta, pais FROM stories ORDER BY id DESC').all()
  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Histórias Recentes</h1>
      <div className="space-x-2">
        <Link href="/brasil" className="underline">Brasil</Link>
        <Link href="/internacional" className="underline">Internacional</Link>
      </div>
      <ul className="space-y-4">
        {stories.map((s: any) => (
          <li key={s.id} className="border p-4 rounded">
            <Link href={`/stories/${s.id}`}
              className="text-lg font-semibold block mb-2">
              {s.titulo}
            </Link>
            <p>{s.descricao_curta}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
