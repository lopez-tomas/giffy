import { useState, useEffect } from 'react'
import getGifs from './services/getGifs'
import './App.css';

import Gif from './components/Gif'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'programming', limit: 10 }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(({id, title, url}) =>
            <Gif
              key={id}
              title={title}
              url={url}
            />
          )
        }
      </section>
    </div>
  );
}

export default App;
