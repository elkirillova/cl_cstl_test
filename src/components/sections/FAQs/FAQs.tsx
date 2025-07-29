import { Accordion } from '@/components'
import { FaqsType } from '@/store/types'

export const FAQs = ({ items }: { items: FaqsType[] }) => {
	return (
		<section className="section faqs" id="faqs">
			<div className="container">
				<div className="faqs__wrapper">
					<div className="section__title faqs__title">
						<h2>Еще вопросы?</h2>
					</div>
					<Accordion items={items} />
				</div>
			</div>
		</section>
	)
}
