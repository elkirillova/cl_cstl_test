import { Description, Hero } from '@/components'

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<section id="section2" className="section" style={{ height: '500px' }}>
				<div className="container">Маршрут</div>
			</section>
			<section id="section3" className="section" style={{ height: '500px' }}>
				<div className="container">Бинго</div>
			</section>
			<section id="section4" className="section" style={{ height: '500px' }}>
				<div className="container">FAQs</div>
			</section>
		</>
	)
}
