import React from 'react'
import './styles.css'

import Gif from '../Gif/index'

const ListOfGifs = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {
        gifs.map(({id, title, url}) =>
          <Gif
            key={id}
            id={id}
            title={title}
    	      url={url}
          />
        )
      }
    </div>
  )
}

export default ListOfGifs
