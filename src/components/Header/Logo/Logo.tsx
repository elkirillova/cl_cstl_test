import Link from 'next/link'
import { Icon } from '@/components'
import { memo } from 'react'

export const Logo = memo(() => {
	return (
		<Link className="logo" href={'/'}>
			<Icon iconId={'logoPart1'} />
			<Icon iconId={'logoPart2'} width={'23px'} height={'23px'} viewBox={'0 0 23 23'} />
			<Icon iconId={'logoPart3'} width={'29px'} height={'25px'} viewBox={'0 0 29 25'} />
		</Link>
	)
})

Logo.displayName = 'Logo'
