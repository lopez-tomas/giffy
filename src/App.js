import { useState } from 'react'
import { Route, Link } from 'wouter'
import ListOfGifs from './components/ListOfGifs'
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('panda')
  const [limit, setLimit] = useState(5)

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/colombia">Colombia GIFs</Link>
        <Link to="/gif/peru">Peru GIFs</Link>
        <Link to="/gif/chile">Chile GIFs</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
      </section>
    </div>
  );
}

export default App;
