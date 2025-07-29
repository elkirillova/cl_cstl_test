import { TabButton } from '@/store/types'
import clsx from 'clsx'

type Props = {
	item: TabButton
	onClick: () => void
	isActive: boolean
	role?: 'tab';
	'aria-controls'?: string
	'aria-selected': boolean
}

export const TabsButton = ({ item, isActive, ...rest }: Props) => {
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
			{...rest}
		>
			<p className="tabs__button-title">{title}</p>
		</button>
	)
}
