import { Outfit } from 'next/font/google'
import './globals.css'
import './globalicon.css'
import { ClerkProvider } from '@clerk/nextjs'

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang="en">
				<title>Foodoe</title>
				<body className={outfit.className}>
					{children}
				</body>
			</html>
		</ClerkProvider>
	)
}
