import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import '@/styles/index.scss'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'

const roboto = Roboto({
	subsets: ['cyrillic'],
	weight: ['400', '500'],
	display: 'swap',
	variable: '--font-roboto',
})

export const metadata: Metadata = {
	title: 'Cl_CSTL_TEST',
	description: 'Тестовое задание для CL_CSTL',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ru">
			<body className={roboto.className}>
				<Header />
				<main className={'main'}>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
