import { useState, useEffect, useContext } from 'react'
import getGifs from 'services/getGifs'
import GifsContext from 'context/GifsContext'

const useGifs = ({ keyword } = { keyword: null }) => {
	const [loading, setLoading] = useState(false)
	const { gifs, setGifs } = useContext(GifsContext)

	useEffect(() => {
		setLoading(true)
		// we recover keyword from localStorage
		const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

		getGifs({ keyword: keywordToUse })
			.then(gifs => {
				setGifs(gifs)
				setLoading(false)
				// we save keyword in localStorage
				localStorage.setItem('lastKeyword', keyword)
			})
	}, [keyword, setGifs])

	return { loading, gifs }
}

export default useGifs
