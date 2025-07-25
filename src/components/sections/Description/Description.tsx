import Image from 'next/image'

export const Description = () => {
	return (
		<section className="section desc" id="desc">
			<div className="container">
				<div className="desc__wrapper">
					<div className="section__title">
						<h2>Что ждёт за платинкой</h2>
					</div>
					<div className="desc__img">
						<Image src="/desc-img.jpg" alt="Лесной пейзаж" fill sizes="100vw" />
					</div>
					<p className="desc__text">Межгалактические порты и бесконечные просторы вселенной</p>
				</div>
			</div>
		</section>
	)
}
