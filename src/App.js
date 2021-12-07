import { useState, useEffect } from 'react'
import getGifs from './services/getGifs'
import './App.css';

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'rick', limit: 25 }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => {
            return <div id={singleGif.id}>
              <h4>{singleGif.title}</h4>
              <img src={singleGif.url} alt={singleGif.title} />
            </div>
          })
        }
      </section>
    </div>
  );
}

export default App;
