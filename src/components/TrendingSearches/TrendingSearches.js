import { useState, useEffect } from 'react'
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

export default TrendingSearches
