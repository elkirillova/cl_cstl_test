import { FlipCards } from "@/components"
import { flipCardType } from "@/store/types"

export const Bingo = ({ items }: { items: flipCardType[] }) => {
	return (
		<section className="section bingo" id="bingo">
			<div className="container">
				<div className="bingo__wrapper">
					<div className="section__title bingo__title">
						<h2>Открой все карточки и собери свое бинго</h2>
					</div>
					<FlipCards items={items} />
				</div>
			</div>
		</section>
	)
}
