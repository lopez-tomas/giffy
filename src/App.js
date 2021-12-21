import React, { Suspense } from 'react'
import { Route, Link } from 'wouter'
import './App.css';

import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import Error404 from 'pages/404'
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext'

const HomePage = React.lazy(() => import('pages/Home'))

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'midudev',
        subscribe: true
      }
    }>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to="/">
            <img className="App-logo" alt="Giffy logo" src="/logo.png" />
            </Link>

            <GifsContextProvider>
              <Route
                path="/"
                component={HomePage}
              />
              <Route
                path="/search/:keyword"
                component={SearchResults}
              />
              <Route
                path="/gif/:id"
                component={Detail}
              />
              <Route
                path="/404"
                component={Error404}
              />
            </GifsContextProvider>
            </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
