import { FlipCards } from "@/components"
import { FlipCardType, SectionContent } from "@/store/types"

type Props = {
	items: FlipCardType[] 
} & SectionContent

export const Bingo = ({ items, heading }: Props) => {
	return (
		<section className="section" id="bingo">
			<div className="container">
				<div className="section__wrapper">
					<div className="section__title">
						<h2>{heading}</h2>
					</div>
					<FlipCards items={items} />
				</div>
			</div>
		</section>
	)
}
