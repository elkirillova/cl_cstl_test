import { FlipCards } from "@/components"
import { FlipCardType } from "@/store/types"

export const Bingo = ({ items }: { items: FlipCardType[] }) => {
	return (
		<section className="section" id="bingo">
			<div className="container">
				<div className="section__wrapper">
					<div className="section__title">
						<h2>Открой все карточки и собери свое бинго</h2>
					</div>
					<FlipCards items={items} />
				</div>
			</div>
		</section>
	)
}
