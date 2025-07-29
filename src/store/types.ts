export type FaqsType = {
	id: number
	question: string
	answer: string
}

export type FlipCardType = {
	id: number
	title: string
	description: string
	bgImage?: string
}

export type TabId = 1 | 2 | 3

export type TabButton = {
	title: string
	bgImage: string
}

export type CardType = {
	id: number
	title: string
	subtitle: string
}

export type TabsData = {
	id: TabId
	button: TabButton
	items: CardType[]
}
