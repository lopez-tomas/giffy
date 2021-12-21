import useSingleGif from 'hooks/useSingleGif'
import Gif from 'components/Gif'

const Error404 = () => {
	const gifId = "YPPI2Q6DAz4CohnPDD"
	const { gif } = useSingleGif({ id: gifId })

	return (
		<div>
			<h1 className="App-error">ERROR 404 :(</h1>
			<Gif {...gif} />
		</div>
	)
}

export default Error404