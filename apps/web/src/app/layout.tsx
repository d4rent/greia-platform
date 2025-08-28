import { ChakraProvider } from '@chakra-ui/react'
import { Providers } from './providers'
import Navigation from '../components/Navigation'

export const metadata = {
  title: 'GREIA Platform',
  description: 'A comprehensive life\'s operating system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}