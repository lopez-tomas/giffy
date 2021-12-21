import { Helmet } from 'react-helmet'
import useSingleGif from 'hooks/useSingleGif'
import Gif from 'components/Gif'

const Error404 = () => {
	const gifId = "YPPI2Q6DAz4CohnPDD"
	const { gif } = useSingleGif({ id: gifId })

	return (
		<div>
			<Helmet>
				<title>Error 404 | Giffy</title>
				<meta name="description" content="Error 404" /> 
			</Helmet>
			<h1 className="App-error">ERROR 404 :(</h1>
			<Gif {...gif} />
		</div>
	)
}

export default Error404