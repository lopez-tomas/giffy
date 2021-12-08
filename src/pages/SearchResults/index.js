import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/index'
import ListOfGifs from '../../components/ListOfGifs/index'
import getGifs from '../../services/getGifs'

const SearchResults = ({ params }) => {
	const { keyword } = params
	const [loading, setLoading] = useState(false)
	const [gifs, setGifs] = useState([])

	useEffect(() => {
		setLoading(true)
		getGifs({ keyword })
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)
			})
	}, [keyword])

	return (
		<>
			{loading
				? <Spinner />
				: <ListOfGifs gifs={gifs} />
			}
			
		</>
	)
}

export default SearchResults
