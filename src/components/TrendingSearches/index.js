import { useState, useEffect } from 'react'
import getTrendingTerms from '../../services/getTrendingTermsService'
import Category from '../Category'

const TrendingSearches = () => {
	const [trends, setTrends] = useState([])

	useEffect(() => {
		getTrendingTerms().then(setTrends)
	}, [])

	return (
		<Category name="Tendencies" options={trends}/>
	)
}

export default TrendingSearches
