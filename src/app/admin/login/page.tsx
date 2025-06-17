'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const router = useRouter()
  const [error, setError] = useState('')
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: form.email.value, password: form.password.value })
    })
    if (res.ok) {
      router.push('/admin')
    } else {
      setError('Credenciais inválidas')
    }
  }
  return (
    <main className="max-w-sm mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Login Admin</h1>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input name="email" type="email" placeholder="Email" className="border p-2 w-full" />
        <input name="password" type="password" placeholder="Senha" className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 w-full">Entrar</button>
      </form>
      {error && <p className="mt-4 text-red-500">{error}</p>}
    </main>
  )
}
