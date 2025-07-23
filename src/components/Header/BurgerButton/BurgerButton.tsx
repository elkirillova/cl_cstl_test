type Props = {
	isOpen: boolean
	onClick: () => void
	ariaCcontrols?: string
	ariaExpanded?: boolean
	ariaLabel?: string
}

export const BurgerButton = ({
	isOpen,
	onClick,
	ariaCcontrols,
	ariaExpanded,
	ariaLabel,
}: Props) => {
	return (
		<button
			onClick={onClick}
			className={isOpen ? 'burger burger--open' : 'burger'}
			aria-controls={ariaCcontrols}
			aria-expanded={ariaExpanded}
			aria-label={ariaLabel}
		>
			<span />
			<span />
			<span />
		</button>
	)
}
