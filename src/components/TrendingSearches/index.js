import { useState, useEffect, useRef } from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from 'components/Category'

const TrendingSearches = () => {
	const [trends, setTrends] = useState([])

	useEffect(() => {
		getTrendingTerms().then(setTrends)
	}, [])

	return (
		<>
			<h3 className="App-title">The <span>MOST</span> popular GIFs</h3>
			<Category name="Tendencies" options={trends}/>
		</>
	)
}

const LazyTrending = () => {
	const [show, setShow] = useState(false)
	const ref = useRef()

	useEffect(() => {
		const onChange = (entries, observer) => {
			const el = entries[0]
			if (el.isIntersecting) {
				setShow(true)
				observer.disconnect()
			}
		}

		const observer = new IntersectionObserver(onChange, {
			rootMargin: '100px'
		})

		observer.observe(ref.current)

		return () => observer.disconnect()
	})

	return (
		<div ref={ref}>
			{show ? <TrendingSearches /> : null}
		</div>
	)
}

export default LazyTrending
