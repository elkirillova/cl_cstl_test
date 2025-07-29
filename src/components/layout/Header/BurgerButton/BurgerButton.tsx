import { Icon } from '@/components'
import { memo } from 'react'

type Props = {
	onClick: () => void
	ariaControls?: string
	ariaExpanded?: boolean
}

export const BurgerButton = memo(({ onClick, ariaControls, ariaExpanded }: Props) => {
	return (
		<button
			onClick={onClick}
			className="burger"
			aria-controls={ariaControls}
			aria-expanded={ariaExpanded}
			aria-label="Открыть меню"
		>
			<Icon iconId={'openMenu'} width={'32px'} height={'22px'} viewBox={'0 0 32 22'} />
		</button>
	)
})

BurgerButton.displayName = 'BurgerButton'
