type IconProps = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
	className?: string
}

export const Icon = ({ iconId, height, viewBox, width, className }: IconProps) => {
	return (
		<svg
			width={width || '26'}
			height={height || '26'}
			viewBox={viewBox || '0 0 26 26'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			className={className}
		>
			<use href={`/icons/icons-sprite.svg#${iconId}`} />
		</svg>
	)
}