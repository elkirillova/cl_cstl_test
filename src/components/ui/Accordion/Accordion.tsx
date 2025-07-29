'use client'

import { FaqsType } from '@/store/types'
import { useEffect, useState } from 'react'
import { AccordionItem } from './AccordionItem.tsx/AccordionItem'

export const Accordion = ({ items }: { items: FaqsType[] }) => {
	const [openId, setOpenId] = useState<number | null>(null)

	const handleClick = (id: number) => {
		setOpenId(prev => (prev === id ? null : id))
	}

	useEffect(() => {
		if (items.length > 0) {
			setOpenId(items[0].id)
		}
	}, [items])

	if (!items.length) return <p>Вопросов нет</p>

	return (
		<ul className="accordion">
			{items.map(item => (
				<AccordionItem
					key={item.id}
					data={item}
					onClick={handleClick}
					isOpen={item.id === openId}
				/>
			))}
		</ul>
	)
}
