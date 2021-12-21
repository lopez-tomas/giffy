import useSingleGif from 'hooks/useSingleGif'
import { Helmet } from 'react-helmet'
import './styles.css'

import { Redirect } from 'wouter'
import Gif from 'components/Gif'
import Spinner from 'components/Spinner'

const Detail = ({ params }) => {
	const { gif, isLoading, isError } = useSingleGif({ id: params.id })
	const title = gif ? gif.title : ''

	if (isLoading) {
		return (
			<>
				<Helmet>
					<title>Loading...</title>
				</Helmet>
				<Spinner />
			</>
		)
	}

	if (isError) return <Redirect to="/404" />
	if (!gif) return null

	return (
		<div>
			<Helmet>
				<title>{title} | Giffy</title>
			</Helmet>
			<h3 className="App-title">{gif.title}</h3>
			<Gif {...gif} />
		</div>
	)
}

export default Detail
