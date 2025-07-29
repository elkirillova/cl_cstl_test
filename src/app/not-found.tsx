import Link from 'next/link'

export default function NotFoundPage() {
	return (
		<section className="not-found">
			<div className="container">
				<div className="not-found__wrapper">
					<div className="section__title">
						<h2>Страница не найдена</h2>
					</div>
					<Link href="/">Вернуться на главную</Link>
				</div>
			</div>
		</section>
	)
}
