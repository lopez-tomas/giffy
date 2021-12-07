import React from 'react'
import Gif from './Gif'

const LisitOfGifs = ({ gifs }) => {
	return gifs.map(({id, title, url}) =>
    <Gif
      key={id}
      title={title}
    	url={url}
    />
  )
}

export default LisitOfGifs
