'use client'
import { Cards } from '@/components'
import { TabId, TabsData } from '@/store/types'
import { useEffect, useState } from 'react'
import { TabsButton } from './TabsButton/TabsButton'
import clsx from 'clsx'

export const Tabs = ({ data }: { data: TabsData[] }) => {
	const [activeTabId, setActiveTabId] = useState<TabId | null>(null)

	const activeTab = data.find(item => item.id === activeTabId)

	useEffect(() => {
		if (!activeTabId && data.length) {
			setActiveTabId(data[0].id)
		}
	}, [activeTabId, data])

	const handleClick = (id: TabId) => {
		setActiveTabId(id)
	}

	if (!data || !data.length) return

	return (
		<div className="tabs">
			<ul className="tabs__nav">
				{data.map(item => (
					<li
						key={item.id}
						className={clsx('tabs__nav-item', {
							'tabs__nav-item--active': activeTabId === item.id,
						})}
					>
						<TabsButton
							item={item.button}
							onClick={() => handleClick(item.id)}
							isActive={activeTabId === item.id}
						/>
					</li>
				))}
			</ul>
			<div className="tabs__content">{activeTab && <Cards items={activeTab.items} />}</div>
		</div>
	)
}
