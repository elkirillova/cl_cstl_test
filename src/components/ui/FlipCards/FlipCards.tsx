import { FlipCardType } from '@/store/types'
import { FlipCard } from './FlipCard/FlipCard'

export const FlipCards = ({ items }: { items: FlipCardType[] }) => {
	if (!items.length) return <p>Карточек нет</p>

	return (
		<ul className="flipcards">
			{items.map(item => (
				<li className="flipcards__item" key={item.id}>
					<FlipCard
						data={item}
					/>
				</li>
			))}
		</ul>
	)
}
