import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Starter Stories',
  description: 'Histórias de empreendedores',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
