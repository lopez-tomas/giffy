import React, { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'wouter'

import ListOfGifs from 'components/ListOfGifs/index'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

const Home = () => {
	const [path, pushLocation] = useLocation()
	const { loading, gifs } = useGifs()

	const handleSubmit = useCallback(({ keyword }) => {
		// go to other route
		pushLocation(`/search/${keyword}`)
	}, [pushLocation])

	return (
		<>
			<Helmet>
				<title>Home | Giffy</title>
			</Helmet>
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
