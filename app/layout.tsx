import { Outfit } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<title>Foodoe</title>
			<body className={outfit.className}>
				{children}
			</body>
		</html>
	)
}
