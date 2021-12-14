import React from 'react'
import { Link } from 'wouter'
import 'components/Gif/styles.css'

const Gif = ({ id, title, url }) => {
	return (
    <div className="Gif">
      <div className="Gif-buttons">
      </div>
      <Link to={`/gif/${id}`} className="Gif-link">
        <h4>{title}</h4>
        <img loading="lazy" src={url} alt={title} />
      </Link>
    </div>
	)
}

export default Gif
