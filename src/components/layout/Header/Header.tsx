'use client'
import { useEffect, useRef, useState } from 'react'
import { BurgerButton } from './BurgerButton/BurgerButton'
import { Logo } from './Logo/Logo'
import { Menu } from './Menu/Menu'
import { Overlay, Portal } from '@/components'
import { useMediaQuery } from '@/hooks'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

export const Header = () => {
	const [hasMounted, setHasMounted] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

	const isMobile = useMediaQuery('(max-width: 992px)')

	const sentinelRef = useRef<HTMLDivElement>(null)
	const [isScrolled, setIsScrolled] = useState(false)

	const pathname = usePathname()
	const isHomePage = pathname === '/'

	const menuId = 'menu'

	const handleMenuClose = () => {
		setIsMobileMenuOpen(false)
	}

	useEffect(() => {
		setHasMounted(true)
	}, [])

	useEffect(() => {
		if (isMobile) {
			document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [isMobile, isMobileMenuOpen])

	useEffect(() => {
		const sentinel = sentinelRef.current

		if (!sentinel) return

		const observer = new IntersectionObserver(([entry]) => setIsScrolled(!entry.isIntersecting), {
			threshold: 0,
		})

		observer.observe(sentinel)

		return () => observer.unobserve(sentinel)
	}, [])

	if (!hasMounted) {
		return null 
	}

	if (!isHomePage)
		return (
			<>
				<header className="header">
					<div className="container">
						<div className="header__wrapper">
							<Logo />
						</div>
					</div>
				</header>
			</>
		)

	return (
		<>
			<div ref={sentinelRef} className="header__sentinel" />
			<header className={clsx('header', isScrolled && 'header--scrolled')}>
				<div className="container">
					<div className="header__wrapper">
						<Logo />

						{hasMounted && !isMobile && <Menu className={'header__nav'} />}
						{hasMounted && isMobile && (
							<BurgerButton
								onClick={() => setIsMobileMenuOpen(true)}
								ariaControls={menuId}
								ariaExpanded={isMobileMenuOpen}
							/>
						)}
					</div>
				</div>
			</header>
			{hasMounted && isMobile && isMobileMenuOpen && (
				<Portal>
					<>
						<Menu
							id={menuId}
							isMobile={isMobile}
							className={isMobileMenuOpen ? 'menu--show ' : ''}
							onClick={handleMenuClose}
						/>
						<Overlay onClick={handleMenuClose} />
					</>
				</Portal>
			)}
		</>
	)
}
