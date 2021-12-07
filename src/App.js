import { useState, useEffect } from 'react'
import './App.css';
import getGifs from './services/getGifs'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'rick', limit: 25 }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} /> )
        }
      </section>
    </div>
  );
}

export default App;
