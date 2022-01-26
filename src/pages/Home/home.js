import { React, useState } from 'react'
import { useLocation } from 'wouter'
import './home.css'
import { useGifts } from 'hooks/useGifts'
import { ListOfGifts } from 'components/ListOfGifts'
import TrendingSearch from 'components/LazyTrending'

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [location, pushLocation] = useLocation()
  const { gift, loading, setPage } = useGifts()

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)

  }

  const handleChange = (e) => {
    // Funcion que captura el evento change del input para obtener el valor y cambiar el estado de keyword
    setKeyword(e.target.value)
  }

  const searchKeyword = (e) => {
    // Evento que cambia la location de wooter router con el valor del keyword
    e.preventDefault()
    pushLocation(`search/${keyword}`)
  }

  return (
    <div className='container_lista-home'>
      <form onSubmit={searchKeyword}>
        <input placeholder='Ingrese una Busqueda...' onChange={handleChange} value={keyword}></input>
      </form>
      <div className='container-home'>
        <h4>Ultimos Gifts</h4>
        <>{loading ? <span> CARGANDO ..... </span> : <ListOfGifts gift={gift} />}</>
      </div>
      <button onClick={handleNextPage}> Next page</button>
      <TrendingSearch />
    </div>
  )
}
