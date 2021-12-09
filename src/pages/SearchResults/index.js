import useGifs from '../../hooks/useGifs'
import Spinner from '../../components/Spinner/index'
import ListOfGifs from '../../components/ListOfGifs/index'

const SearchResults = ({ params }) => {
	const { keyword } = params
	const { loading, gifs } = useGifs({ keyword })

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
