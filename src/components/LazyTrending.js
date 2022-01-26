import React, { Suspense } from 'react'
import { useNearScreen } from 'hooks/useNearScreen'


const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending() {
  const { elementRef, isIntersected } = useNearScreen() // Hook lazy loading si es intersectado devuelve true

  return (
    <div ref={elementRef} className='container-list'>
      <Suspense fallback={'Loading....'}>
        {isIntersected ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  )
}
