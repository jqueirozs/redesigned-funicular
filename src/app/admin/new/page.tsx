'use client'
import { useRouter } from 'next/navigation'

export default function NewStory() {
  const router = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    const res = await fetch('/api/stories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(Object.entries(data)))
    })
    if (res.ok) router.push('/admin')
  }
  return (
    <main className="max-w-xl mx-auto p-4 space-y-2">
      <h1 className="text-2xl font-bold">Nova história</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="titulo" placeholder="Título" className="border p-2 w-full" required />
        <input name="descricao_curta" placeholder="Descrição curta" className="border p-2 w-full" required />
        <input name="pais" placeholder="País" className="border p-2 w-full" required />
        <input name="modelo_negocio" placeholder="Modelo de negócio" className="border p-2 w-full" />
        <input name="faixa_faturamento" placeholder="Faixa de faturamento" className="border p-2 w-full" />
        <textarea name="como_comecou" placeholder="Como começou" className="border p-2 w-full" />
        <textarea name="desafios" placeholder="Desafios" className="border p-2 w-full" />
        <textarea name="estrategias" placeholder="Estratégias" className="border p-2 w-full" />
        <textarea name="modelo_atual" placeholder="Modelo atual" className="border p-2 w-full" />
        <textarea name="aprendizados" placeholder="Aprendizados" className="border p-2 w-full" />
        <input name="links" placeholder="Links externos" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Salvar</button>
      </form>
    </main>
  )
}
