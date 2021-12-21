import { useEffect, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'
import useGifs from 'hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import Spinner from 'components/Spinner/index'
import ListOfGifs from 'components/ListOfGifs/index'
import { Helmet } from 'react-helmet'

const SearchResults = ({ params }) => {
	const { keyword } = params
	const { loading, gifs, setPage } = useGifs({ keyword })

	const externalRef = useRef()
	const { isNearScreen } = useNearScreen({
		externalRef: loading ? null : externalRef,
		once: false
	})

	const title = gifs
		? `${gifs.length} results of ${keyword}`
		: loading ? 'Loading...' : ''

	const debounceHandleNextPage = useCallback(debounce(
		() => setPage(prevPage => prevPage + 1), 200
	), [setPage])

	useEffect(() => {
		if (isNearScreen) debounceHandleNextPage()
	}, [debounceHandleNextPage, isNearScreen])

	return (
		<>
			{loading
				? <Spinner />
				: <> 
						<Helmet>
							<title>{title}</title>
							<meta name="description" content={title} />
							<meta name="rating" content="General" />
						</Helmet>
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
