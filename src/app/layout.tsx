import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import '@/styles/index.scss'
import { Header, Footer } from '@/components'

const roboto = Roboto({
	subsets: ['cyrillic'],
	weight: ['400', '500'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Cl_CSTL_TEST',
	description: 'Тестовое задание для CL_CSTL',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
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
