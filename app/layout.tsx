import { Nunito } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Model from './components/Models/Model'

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        <Model
          actionLabel='Submit'
          secondaryActionLabel='Cancel'
          isOpen title='hello world' />
        {children}
      </body>
    </html>
  )
}
