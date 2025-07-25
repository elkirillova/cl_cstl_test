import Link from 'next/link'

type Props = {
	id?: string
	className?: string
	onLinkClick?: () => void
}

const linksData = [
	{ id: 1, url: 'desc', title: 'Что ждет' },
	{ id: 2, url: 'section2', title: 'Маршрут' },
	{ id: 3, url: 'section3', title: 'Бинго' },
	{ id: 4, url: 'section4', title: 'FAQs' },
]

export const Menu = ({ id, className, onLinkClick }: Props) => {
	return (
		<nav className={`${className} menu`} id={id}>
			<ul className="menu__list">
				{linksData.map(item => (
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
