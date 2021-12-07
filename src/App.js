import { useState, useEffect } from 'react'
import getGifs from './services/getGifs'
import './App.css';

import ListOfGifs from './components/ListOfGifs'

function App() {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    getGifs({ keyword: 'argentina', limit: 5 }).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs gifs={gifs} />
      </section>
    </div>
  );
}

export default App;
