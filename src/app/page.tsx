import { Description, FAQs, Hero } from '@/components'
import { faqsList } from '@/store/data'

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<section id="section2" className="section">
				<div className="container">Маршрут</div>
			</section>
			<section id="section3" className="section">
				<div className="container">Бинго</div>
			</section>
			<FAQs items={faqsList} />
		</>
	)
}
