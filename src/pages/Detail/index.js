import React, { useContext } from 'react'
import GifsContext from '../../context/GifsContext'
import './styles.css'

import Gif from '../../components/Gif'

const Detail = ({ params }) => {
	const { gifs } = useContext(GifsContext)
	console.log(gifs)

	const gif = gifs.find(singleGif =>
		singleGif.id === params.id
	)

	console.log(gif)

	return (
		<Gif {...gif} />
	)
}

export default Detail
