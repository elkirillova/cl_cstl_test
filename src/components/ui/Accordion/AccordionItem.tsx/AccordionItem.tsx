import { Icon } from '@/components'
import { FaqsType } from '@/store/types'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

type Props = {
	data: FaqsType
	onClick: (id: number) => void
	isOpen: boolean
}

export const AccordionItem = ({ data, onClick, isOpen }: Props) => {
	const itemRef = useRef<HTMLDivElement | null>(null)
	const [height, setHeight] = useState('0px')

	useEffect(() => {
		if (isOpen && itemRef.current) {
			setHeight(`${itemRef.current.scrollHeight}px`)
		} else {
			setHeight('0px')
		}
	}, [isOpen])

	return (
		<>
			<button
				className={clsx('accordion__header', isOpen && 'open')}
				onClick={() => onClick(data.id)}
				aria-expanded={isOpen}
				aria-controls={`accordion-panel-${data.id}`}
			>
				<span>{data.question}</span>
				<Icon
					iconId={'accordionArray'}
					width={'22px'}
					height={'14px'}
					viewBox={'0 0 22 14'}
					className={clsx('accordion__icon', isOpen && 'open')}
				/>
			</button>
			<div
				id={`accordion-panel-${data.id}`}
				className={clsx('accordion__collapse', isOpen && 'open')}
				style={{ height }}
				role="region"
				aria-hidden={!isOpen}
			>
				<div className="accordion__body" ref={itemRef}>
					<p>{data.answer}</p>
				</div>
			</div>
		</>
	)
}
