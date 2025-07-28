import { Bingo, Description, FAQs, Hero } from '@/components'
import { faqsList } from '@/store/data'
import { flipCardsList } from '@/store/data'

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<section id="section2" className="section">
				<div className="container">Маршрут</div>
			</section>
			<Bingo items={flipCardsList} />
			<FAQs items={faqsList} />
		</>
	)
}
