import React, { useState } from 'react'

const SearchForm = ({ onSubmit }) => {
	const [keyword, setKeyword] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

		onSubmit({ keyword })
	}

	const handleChange = e => {
		setKeyword(e.target.value)
	}

	return (
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" value={keyword} placeholder="Search a GIF here" />
				<button>Search</button>
			</form>
	)
}

export default React.memo(SearchForm)
