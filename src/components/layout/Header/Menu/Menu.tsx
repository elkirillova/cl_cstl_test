import { Icon } from '@/components'
import { menuData } from '@/store/data'
import Link from 'next/link'

type Props = {
	id?: string
	className?: string
	isMobile?: boolean
	isOpen?: boolean
	onClick?: () => void
}

export const Menu = ({ id, className, isMobile, isOpen, onClick }: Props) => {
	return (
		<div className={`menu ${className}`}>
			<nav className="menu__nav" id={id} aria-hidden={!isOpen}>
				<ul className="menu__list">
					{menuData.map(item => (
						<li key={item.id} className="menu__item">
							<Link href={`#${item.url}`} onClick={onClick}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			{isMobile && (
				<button
					onClick={onClick}
					className="menu__close"
					aria-controls={id}
					aria-expanded={isOpen}
					aria-label="Закрыть меню"
				>
					<Icon iconId={'close'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'} />
				</button>
			)}
		</div>
	)
}
