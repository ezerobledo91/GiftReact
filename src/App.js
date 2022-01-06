import React from 'react'
import './App.css'
import { SearchResults } from './pages/SearchResults/SearchResults'
import { Link, Route } from 'wouter'
import Home from './pages/Home/home'
import { GiftDetail } from './pages/GiftDetail/giftdetail'
import StaticContext from './context/StaticContext'
import { GiftContextProvider } from './context/GiftsContext'

function App() {
  return (
    <StaticContext.Provider value={{ name: 'Blanco', suscribete: true }}>
      <div className='App'>
        <section className='App-content'>
          <Link to='/'>GifApp </Link>
          {/* La api de wouter permite renderizar por ruta, pasando un parametro por url y el componente a renderizar */}
          <GiftContextProvider>
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/' component={Home} />
            <Route path='/gift/:id' component={GiftDetail} />
          </GiftContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
