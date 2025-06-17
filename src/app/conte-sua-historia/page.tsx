'use client'
import { useState } from 'react'

export default function SubmitPage() {
  const [message, setMessage] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = {
      nome: form.nome.value,
      email: form.email.value,
      link_negocio: form.link.value,
      descricao: form.descricao.value,
      faixa_faturamento: form.faturamento.value,
      historia: form.historia.value,
    }
    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      setMessage('Enviado com sucesso!')
      form.reset()
    } else {
      setMessage('Erro ao enviar')
    }
  }
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Conte sua história</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="nome" placeholder="Nome" className="border p-2 w-full" required />
        <input name="email" type="email" placeholder="Email" className="border p-2 w-full" required />
        <input name="link" placeholder="Link do negócio" className="border p-2 w-full" />
        <input name="descricao" placeholder="Descrição curta" className="border p-2 w-full" required />
        <input name="faturamento" placeholder="Faixa de faturamento" className="border p-2 w-full" />
        <textarea name="historia" placeholder="Resumo da história" className="border p-2 w-full" required></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Enviar</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </main>
  )
}
