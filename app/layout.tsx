import type { Metadata } from "next";
import "@/resets.scss"
import Head from "next/head";
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: "Desafio Técnico",
  description: "Mini gerenciador de tarefas",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.className}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
            </Head>
            <body >
              {children}
            </body>
          </html>
          );
}
