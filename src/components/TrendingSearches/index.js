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
	let observer
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

		Promise.resolve(
			typeof IntersectionObserver !== "undefined"
				? IntersectionObserver
				: import('intersection-observer')
		).then(() => {
			observer = new IntersectionObserver(onChange, {
				rootMargin: '100px'
			})

			observer.observe(ref.current)
		})


		return () => observer && observer.disconnect()
	})

	return (
		<div ref={ref}>
			{show ? <TrendingSearches /> : null}
		</div>
	)
}

export default LazyTrending
