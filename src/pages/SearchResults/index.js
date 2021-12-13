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
				: <> 
					<h3 className="App-title">
						{decodeURI(keyword)}
					</h3>
					<ListOfGifs gifs={gifs} />
				</>
			}
		</>
	)
}

export default SearchResults
