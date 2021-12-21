import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'

import ListOfGifs from 'components/ListOfGifs/index'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'

const Home = () => {
	const [path, pushLocation] = useLocation()
	const { loading, gifs } = useGifs()

	const handleSubmit = ({ keyword }) => {
		// go to other route
		pushLocation(`/search/${keyword}`)
	}

	return (
		<>
			<SearchForm onSubmit={handleSubmit} />
			<div className="App-main">
				<div className="App-results">
					<h3 className="App-title">Last search</h3>
					<ListOfGifs gifs={gifs} />
				</div>
			</div>

			<div className="App-category">
				<TrendingSearches />
			</div>

		</>
	)
}

export default Home
