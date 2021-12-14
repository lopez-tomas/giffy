import { Route, Link } from 'wouter'
import './App.css';

import Home from 'pages/Home/index'
import SearchResults from 'pages/SearchResults/index'
import Detail from 'pages/Detail/index'
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext/'

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'midudev',
        subscribe: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <Link to="/">
          <img className="App-logo" alt="Giffy logo" src="/logo.png" />
          </Link>
          <GifsContextProvider>
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
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
