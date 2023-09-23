import type { Metadata } from 'next'
import StyledComponentsRegistry from '@/lib/registry'
import App from './app'

export const metadata: Metadata = {
  title: 'Michael Caxias Blog',
  description: 'Blog pessoal de Michael Caxias',
}

export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <App>{children}</App>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
