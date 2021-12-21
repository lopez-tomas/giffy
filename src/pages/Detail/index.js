import useSingleGif from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'
import './styles.css'

import { Redirect } from 'wouter'
import Gif from 'components/Gif'
import Spinner from 'components/Spinner'

const Detail = ({ params }) => {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id })
	const title = gif ? gif.title : ''
	useSEO({ title, description: `Detail of ${title}` })

	if (isLoading) return <Spinner />
	if (isError) return <Redirect to="/404" />
	if (!gif) return null

	return (
		<div>
			<h3 className="App-title">{gif.title}</h3>
			<Gif {...gif} />
		</div>
	)
}

export default Detail
