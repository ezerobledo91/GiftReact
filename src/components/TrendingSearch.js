import { useNearScreen } from 'hooks/useNearScreen'
import React, { useEffect, useState, useRef } from 'react'
import getTrendingGifts from 'services/getTrendingGifts'
import { ListOfTrends } from './ListOfTrends'

const TrendingSearch = () => {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingGifts().then(setTrends)
  }, []) // Con use efect cuando resuelve el then ejecuto el useState y seteo en la respuesta el array.

  return <ListOfTrends name='Tendencias' option={trends} />
}


export default function LazyTrending() {
  const { elementRef, isIntersected } = useNearScreen() // Hook lazy loading si es intersectado devuelve true


  return (
    <div ref={elementRef} className='container-list'>
      {isIntersected ? <TrendingSearch /> : null}
    </div>
  )
}
