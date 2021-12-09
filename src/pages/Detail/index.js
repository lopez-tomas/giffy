import React, { useContext } from 'react'
import GifsContext from '../../context/GifsContext'
import './styles.css'

const Detail = ({ params }) => {
	const { gifs } = useContext(GifsContext)
	console.log(gifs)

	return (
		<h1>GIF with id {params.id}</h1>
	)
}

export default Detail
