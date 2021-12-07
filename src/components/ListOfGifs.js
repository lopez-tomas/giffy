import React, { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'

import Gif from './Gif'

const ListOfGifs = ({ keyword, limit }) => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword, limit }).then(gifs => setGifs(gifs))
  }, [])

	return gifs.map(({id, title, url}) =>
    <Gif
      key={id}
      title={title}
    	url={url}
    />
  )
}

export default ListOfGifs
