type IconProps = {
	iconId: string
	width?: string
	height?: string
	viewBox?: string
}

export const Icon = ({ iconId, height, viewBox, width }: IconProps) => {
	return (
		<svg
			width={width || '26'}
			height={height || '26'}
			viewBox={viewBox || '0 0 26 26'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
		>
			<use href={`/icons-sprite.svg?t=${Date.now()}#${iconId}`} />
		</svg>
	)
}
//TODO:!!!