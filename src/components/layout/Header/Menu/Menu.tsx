import { Icon } from '@/components'
import { menuData } from '@/store/data'
import Link from 'next/link'

type Props = {
	id?: string
	className?: string
	isMobile?: boolean
	onClick?: () => void
}

export const Menu = ({ id, className, isMobile, onClick }: Props) => {
	return (
		<div className={`menu ${className}`}>
			<nav className="menu__nav" id={id}>
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
				<button onClick={onClick} className="menu__close">
					<Icon iconId={'close'} width={'24px'} height={'24px'} viewBox={'0 0 24 24'} />
				</button>
			)}
		</div>
	)
}
