import { CardType } from '@/store/types'
import { Card } from './Card/Card'

export const Cards = ({items}: {items: CardType[]}) => {
	return (
		<ul className="cards">
			{items.map(item => (
				<li className="cards__item" key={item.id}>
					<Card data={item} />
				</li>
			))}
		</ul>
	)
}
