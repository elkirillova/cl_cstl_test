import { Tabs } from '@/components'
import { TabsData } from '@/store/types'

export const Route = ({ items }: { items: TabsData[] }) => {
	return (
		<section className="section route" id="route">
			<div className="container">
				<div className="route__wrapper">
					<div className="section__title route__title">
						<h2>В первый день вас ждет интересный маршрут</h2>
						<p>
							Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург, так прилежащие
							к нему районы Свердловской области.
						</p>
					</div>
					<Tabs data={items} />
				</div>
			</div>
		</section>
	)
}
