import { TabButton } from '@/store/types'
import clsx from 'clsx'

type Props = {
	item: TabButton
	onClick: () => void
	isActive: boolean
}

export const TabsButton = ({ item, onClick, isActive }: Props) => {
	const { title, bgImage } = item
	return (
		<button
			className={clsx('tabs__button', { 'tabs__button--active': isActive })}
			style={
				bgImage
					? {
							backgroundImage: `url("/images/tabs/${bgImage}.svg")`,
						}
					: undefined
			}
			onClick={onClick}
		>
			<p className="tabs__button-title">{title}</p>
		</button>
	)
}
