'use client'
import useSWR from 'swr'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function AdminPage() {
  const router = useRouter()
  const { data: stories, mutate } = useSWR('/api/stories', fetcher)
  if (!stories) return <div>Carregando...</div>

  const deleteStory = async (id: number) => {
    await fetch(`/api/stories/${id}`, { method: 'DELETE' })
    mutate()
  }

  return (
    <main className="max-w-3xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Admin</h1>
      <Link href="/admin/new" className="underline">Nova história</Link>
      <ul className="space-y-2">
        {stories.map((s: any) => (
          <li key={s.id} className="border p-2 flex justify-between">
            <span>{s.titulo}</span>
            <div className="space-x-2">
              <Link href={`/admin/edit/${s.id}`} className="underline">Editar</Link>
              <button onClick={() => deleteStory(s.id)} className="text-red-500">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
