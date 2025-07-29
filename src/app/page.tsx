import { Route, Bingo, Description, FAQs, Hero } from '@/components'
import { faqsList, tabsData } from '@/store/data'
import { flipCardsList } from '@/store/data'

export default function Home() {
	return (
		<>
			<Hero />
			<Description />
			<Route items={tabsData} />
			<Bingo items={flipCardsList} />
			<FAQs items={faqsList} />
		</>
	)
}
