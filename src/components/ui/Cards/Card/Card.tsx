import { CardType } from "@/store/types"

export const Card = ({ data }: {data: CardType}) => {
	return (
		<div className="card">
			<div className="card__content">
				<p className="card__title">{data.title}</p>
				<p className="card__subtitle">{data.subtitle}</p>
			</div>
		</div>
	)
}
