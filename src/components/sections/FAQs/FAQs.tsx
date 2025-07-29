import { Accordion } from '@/components'
import { FaqsType, SectionContent } from '@/store/types'

type Props = { items: FaqsType[] } & SectionContent

export const FAQs = ({ items, heading }: Props) => {
	return (
		<section className="section faqs" id="faqs">
			<div className="container">
				<div className="faqs__wrapper">
					<div className="section__title faqs__title">
						<h2>{heading}</h2>
					</div>
					<Accordion items={items} />
				</div>
			</div>
		</section>
	)
}
