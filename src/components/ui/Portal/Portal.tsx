'use client'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
	children: ReactNode
}

export const Portal = ({ children }: Props) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		return () => setMounted(false)
	}, [])

	if (!mounted) return null

	return createPortal(children, document.body)
}
