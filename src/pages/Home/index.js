import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'wouter'

import ListOfGifs from 'components/ListOfGifs/index'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/TrendingSearches'

const Home = () => {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()

	const { loading, gifs } = useGifs()

	const handleSubmit = e => {
		e.preventDefault()
		pushLocation(`/search/${keyword}`)
	}

	const handleChange = e => {
		setKeyword(e.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" value={keyword} placeholder="Search a GIF here" />
				<button>Search</button>
			</form>
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
