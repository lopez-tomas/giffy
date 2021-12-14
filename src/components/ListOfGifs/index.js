import React from 'react'
import 'components/ListOfGifs/styles.css'

import Gif from 'components/Gif'

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
