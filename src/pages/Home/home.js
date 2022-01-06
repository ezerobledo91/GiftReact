import { React, useState } from 'react'
import { Link, useLocation } from 'wouter'
import './home.css'
import { useGifts } from '../../hooks/useGifts'
import { ListOfGifts } from '../../components/ListOfGifts'

const POPULAR_ROUTES = ['Animales', 'Matix', 'Programing']

export default function Home() {
  const [keyword, setKeyword] = useState('')
  const [path, pushLocation] = useLocation()
  const { gift, loading } = useGifts()


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
      <h4>Los Gifts más Populares</h4>
      <ul>
        {POPULAR_ROUTES.map((popular_routes) => (
          <li key={popular_routes}>
            <Link to={`search/${popular_routes}`}>Gifts de {popular_routes}</Link>
          </li>
        ))}
      </ul>
      <h4>Ultimos Gifts</h4>
      <>{loading ? <span> CARGANDO ..... </span> : <ListOfGifts gift={gift} />}</>
      
    </div>
  )
}
