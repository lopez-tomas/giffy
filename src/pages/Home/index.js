import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

const POPULAR_GIFS = ["Matrix", "Rick", "Morty", "Argentina"]

const Home = () => {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()

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

			<h3 className="App-title">The <span>MOST</span> popular GIFs</h3>	

			<ul>
				{POPULAR_GIFS.map((popularGif) => (
					<li key={popularGif}>
						<Link to={`/search/${popularGif}`}>{popularGif} GIFs</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default Home
