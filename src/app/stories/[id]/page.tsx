import db from '@/lib/db'
import '@/lib/initdb'
import Link from 'next/link'
import type { PageProps } from 'next'

export const dynamic = 'force-dynamic'

export default function StoryPage({ params }: PageProps<{ id: string }>) {
  const story = db.prepare('SELECT * FROM stories WHERE id = ?').get(params.id)
  if (!story) return <div>Não encontrado</div>
  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">{story.titulo}</h1>
      <p>{story.descricao_curta}</p>
      <section>
        <h2 className="font-semibold">Como começou</h2>
        <p>{story.como_comecou}</p>
      </section>
      <section>
        <h2 className="font-semibold">Desafios</h2>
        <p>{story.desafios}</p>
      </section>
      <section>
        <h2 className="font-semibold">Estratégias</h2>
        <p>{story.estrategias}</p>
      </section>
      <section>
        <h2 className="font-semibold">Modelo atual</h2>
        <p>{story.modelo_atual}</p>
      </section>
      <section>
        <h2 className="font-semibold">Aprendizados e dicas</h2>
        <p>{story.aprendizados}</p>
      </section>
      {story.links && (
        <p><a href={story.links} className="underline">Links</a></p>
      )}
      <Link href="/" className="underline">← Voltar</Link>
    </main>
  )
}
