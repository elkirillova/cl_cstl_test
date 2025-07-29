import { Tabs } from '@/components'
import { SectionContent, TabsData } from '@/store/types'

type Props = {
	items: TabsData[]
} & SectionContent

export const Route = ({ items, heading, description }: Props) => {
	return (
		<section className="section route" id="route">
			<div className="container">
				<div className="route__wrapper">
					<div className="section__title route__title">
						<h2>{heading}</h2>
						{description}
					</div>
					<Tabs data={items} />
				</div>
			</div>
		</section>
	)
}
