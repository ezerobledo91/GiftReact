import React, { useEffect, useState } from 'react'
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
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0]
    if(el.isIntersecting) setShow(true)
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px',
    })

    const elementoAObservar = document.getElementById('LazyTrending')
    observer.observe(elementoAObservar)
  })
  return <div id='LazyTrending' className='container-list'>{show ? <TrendingSearch /> : null}</div>
}
