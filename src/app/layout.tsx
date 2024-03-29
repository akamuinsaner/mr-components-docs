import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Script from 'next/script';
import App from './_app';
import { Stack } from '@mui/material';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Stack
          className='footer'
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2024045238号-1</a>
        </Stack>
      </body>
    </html>
  )
}
