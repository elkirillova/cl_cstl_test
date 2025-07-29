import { menuData } from '@/store/data'
import Link from 'next/link'

type Props = {
	id?: string
	className?: string
	onLinkClick?: () => void
}

export const Menu = ({ id, className, onLinkClick }: Props) => {
	return (
		<nav className={`${className} menu`} id={id}>
			<ul className="menu__list">
				{menuData.map(item => (
					<li key={item.id} className="menu__item">
						<Link href={`#${item.url}`} onClick={onLinkClick}>
							{item.title}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
