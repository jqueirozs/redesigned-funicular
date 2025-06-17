'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import type { PageProps } from 'next'

export default function EditPage({ params }: PageProps<{ id: string }>) {
  const router = useRouter()
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/stories/${params.id}`).then(res => res.json()).then(setData)
  }, [params.id])

  if (!data) return <div>Carregando...</div>

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = Object.fromEntries(new FormData(form))
    await fetch(`/api/stories/${params.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    router.push('/admin')
  }
  return (
    <main className="max-w-xl mx-auto p-4 space-y-2">
      <h1 className="text-2xl font-bold">Editar história</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="titulo" defaultValue={data.titulo} className="border p-2 w-full" />
        <input name="descricao_curta" defaultValue={data.descricao_curta} className="border p-2 w-full" />
        <input name="pais" defaultValue={data.pais} className="border p-2 w-full" />
        <input name="modelo_negocio" defaultValue={data.modelo_negocio} className="border p-2 w-full" />
        <input name="faixa_faturamento" defaultValue={data.faixa_faturamento} className="border p-2 w-full" />
        <textarea name="como_comecou" defaultValue={data.como_comecou} className="border p-2 w-full" />
        <textarea name="desafios" defaultValue={data.desafios} className="border p-2 w-full" />
        <textarea name="estrategias" defaultValue={data.estrategias} className="border p-2 w-full" />
        <textarea name="modelo_atual" defaultValue={data.modelo_atual} className="border p-2 w-full" />
        <textarea name="aprendizados" defaultValue={data.aprendizados} className="border p-2 w-full" />
        <input name="links" defaultValue={data.links} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Salvar</button>
      </form>
    </main>
  )
}
