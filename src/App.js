import { useState } from 'react'
import ListOfGifs from './components/ListOfGifs'
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('panda')
  const [limit, setLimit] = useState(5)

  return (
    <div className="App">
      <section className="App-content">
        <button onClick={() => {
          setKeyword('mapache')
          setLimit(1) 
        }}
        >
          Change keyword
        </button>
        <ListOfGifs keyword={keyword} limit={limit} />
      </section>
    </div>
  );
}

export default App;
