import { SectionContent } from "@/store/types"

export const Hero = ({heading, description}: SectionContent) => {
	return (
		<section className="section hero">
			<div className="container">
				<div className="hero__wrapper">
					<div className="hero__title">
						<h1>{heading}</h1>
					</div>
					<div className="hero__about">
						{description}
					</div>
				</div>
			</div>
		</section>
	)
}
