import Image from 'next/image'
import { SectionContent } from "@/store/types"

export const Description = ({heading, description}: SectionContent) => {
	return (
		<section className="section desc" id="desc">
			<div className="container">
				<div className="desc__wrapper">
					<div className="section__title">
						<h2>{heading}</h2>
					</div>
					<div className="desc__img">
						<Image src="/images/desc-img.jpg" alt="Лесной пейзаж" fill sizes="100vw" />
					</div>
					<div className="desc__text">{description}</div>
				</div>
			</div>
		</section>
	)
}
