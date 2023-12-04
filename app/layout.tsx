import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Head>
				<link href="https://api.fontshare.com/v2/css?f[]=sharpie@700&f[]=quicksand@700&f[]=satoshi@700,500,400&f[]=array@400&display=swap" rel="stylesheet" />
			</Head>
			<title>Foodoe</title>
			<body className={inter.className}>
				{children}
			</body>
		</html>
	)
}
