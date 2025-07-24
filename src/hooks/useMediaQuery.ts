import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string): boolean => {
	const [matches, setMatches] = useState(() => {
		if (typeof window === 'undefined') return false
		return window.matchMedia(query).matches
	})

	useEffect(() => {
		const mediaQueryList = window.matchMedia(query)

		const handleChange = () => setMatches(mediaQueryList.matches)

		mediaQueryList.addEventListener('change', handleChange)

		return () => {
			mediaQueryList.removeEventListener('change', handleChange)
		}
	}, [query])

	console.log(matches)

	return matches
}
