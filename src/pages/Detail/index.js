import useGlobalGifs from '../../hooks/useGlobalGifs'
import './styles.css'

import Gif from '../../components/Gif'

const Detail = ({ params }) => {
	const gifs = useGlobalGifs()
	console.log(gifs)

	const gif = gifs.find(singleGif =>
		singleGif.id === params.id
	)

	console.log(gif)

	return (
		<div>
			<h3 className="App-title">{gif.title}</h3>
			<Gif {...gif} />
		</div>
	)
}

export default Detail
