import React, { useEffect, useState } from 'react'
import getTrendingGifts from 'services/getTrendingGifts'
import { ListOfTrends } from './ListOfTrends'

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])
    useEffect(function () {
        getTrendingGifts().then(setTrends)
    }, []) // Con use efect cuando resuelve el then ejecuto el useState y seteo en la respuesta el array.

    return <ListOfTrends name='Tendencias' option={trends} />
}
