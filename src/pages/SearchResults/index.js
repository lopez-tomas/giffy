import useGifs from 'hooks/useGifs'
import Spinner from 'components/Spinner/index'
import ListOfGifs from 'components/ListOfGifs/index'

const SearchResults = ({ params }) => {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })

	const handleNextPage = () => setPage(prevPage => prevPage + 1)

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
			<button onClick={handleNextPage}>Get next page</button>
		</>
	)
}

export default SearchResults
