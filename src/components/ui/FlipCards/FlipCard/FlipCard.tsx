'use client'
import { FlipCardType } from '@/store/types'

type Props = {
	data: FlipCardType
}

export const FlipCard = ({ data }: Props) => {
	const { title, description, bgImage } = data

	return (
		<div
			className="flipcard"
			tabIndex={0}
			role="button"
			aria-label={`Карточка: ${title}. Нажмите, чтобы прочитать описание.`}
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
