import { useEffect, useRef } from 'react'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner/index'
import ListOfGifs from 'components/ListOfGifs/index'

const SearchResults = ({ params }) => {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })
	const externalRef = useRef()
	const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef })

	//const handleNextPage = () => setPage(prevPage => prevPage + 1)

	const handleNextPage = () => console.log('next page')

	useEffect(() => {
		if (isNearScreen) handleNextPage()
	})

	return (
		<>
			{loading
				? <Spinner />
				: <> 
					<h3 className="App-title">
						{decodeURI(keyword)}
					</h3>
					<ListOfGifs gifs={gifs} />
					<div id="visor" ref={externalRef}></div>
				</>
			}
		</>
	)
}

export default SearchResults
