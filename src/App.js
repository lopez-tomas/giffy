import { Route, Link } from 'wouter'
import './App.css';

import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail/index'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/logo.png" />
        </Link>
        <Route
          path="/"
          component={Home}
        />
        <Route
          path="/search/:keyword"
          component={SearchResults}
        />
        <Route
          path="/gif/:id"
          component={Detail}
        />
      </section>
    </div>
  );
}

export default App;
