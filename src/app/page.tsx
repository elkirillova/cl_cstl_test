import { Route, Bingo, Description, FAQs, Hero } from '@/components'
import { faqsList, heroContent, descriptionContent, tabsData, bingoContent, routeContent, faqsContent, flipCardsList } from '@/store/data'

export default function Home() {
	return (
		<>
			<Hero {...heroContent} />
			<Description {...descriptionContent} />
			<Route items={tabsData} {...routeContent} />
			<Bingo items={flipCardsList} {...bingoContent} />
			<FAQs items={faqsList} {...faqsContent} />
		</>
	)
}
