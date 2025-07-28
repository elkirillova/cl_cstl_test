'use client'
import { flipCardType } from '@/store/types'
import clsx from 'clsx'
import { useState } from 'react'

type Props = {
	data: flipCardType
}

export const FlipCard = ({ data }: Props) => {
	const [isFlipped, setIsFlipped] = useState<boolean>(false)
	const { title, description, bgImage } = data

	// useEffect(() => {
	// 	if (!isFlipped) return

	// 	const timer = setTimeout(() => {
	// 		setIsFlipped(false)
	// 	}, 3000)

	// 	return () => clearTimeout(timer)
	// }, [isFlipped])

	return (
		<div
			className={clsx('flipcard', isFlipped && 'flipcard--flipped')}
			onClick={() => setIsFlipped(!isFlipped)}
		>
			<div className="flipcard__content">
				<div
					className="flipcard__front"
					style={
						bgImage
							? {
									backgroundImage: `url("/images/flipcards/${bgImage}.svg")`,
									backgroundSize: 'cover',
									backgroundRepeat: 'no-repeat',
								}
							: undefined
					}
				>
					{title}
				</div>
				<div className="flipcard__back">
					<div className="flipcard__back-content">{description}</div>
				</div>
			</div>
		</div>
	)
}
