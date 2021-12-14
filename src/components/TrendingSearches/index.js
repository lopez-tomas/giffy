import { useState, useEffect } from 'react'
import getTrendingTerms from 'services/getTrendingTermsService'
import Category from 'components/Category'
import useNearScreen from 'hooks/useNearScreen'

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
	const { isNearScreen, fromRef } = useNearScreen({ distance: "200px" })

	return (
		<div ref={fromRef}>
			{isNearScreen ? <TrendingSearches /> : null}
		</div>
	)
}

export default LazyTrending
