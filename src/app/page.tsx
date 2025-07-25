import { Hero } from '@/components'

export default function Home() {
	return (
		<>
			<Hero />
			<section
				id="section1"
				className="section"
				style={{ height: '500px', border: '1px solid red' }}
			>
				<div className="container">Что ждет</div>
			</section>
			<section
				id="section2"
				className="section"
				style={{ height: '500px', border: '1px solid blue' }}
			>
				<div className="container">Маршрут</div>
			</section>
			<section
				id="section3"
				className="section"
				style={{ height: '500px', border: '1px solid green' }}
			>
				<div className="container">Бинго</div>
			</section>
			<section
				id="section4"
				className="section"
				style={{ height: '500px', border: '1px solid pink' }}
			>
				<div className="container">FAQs</div>
			</section>
		</>
	)
}
