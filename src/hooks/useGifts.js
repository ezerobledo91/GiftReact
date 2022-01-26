import { useContext, useEffect, useState } from 'react'
import getGifts from '../services/getGifts'
import GiftContext from '../context/GiftsContext'


const INITIAL_PAGE = 0
export const useGifts = ({ keyword } = { keyword: null }) => {
  // const [gifts, updateGifts] = useState([]) // Destructuracion del useState.
  const { gift, setGifts } = useContext(GiftContext)

  const [loading, updateLoading] = useState(false) // Un useState para poner un loading

  const [page, setPage] = useState(INITIAL_PAGE)

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'popular'
  // Se ejecuta el efecto cuando se renderiza el componente y solo una vez ya que no tiene dependencias en el array de dependencias osea de que depende para actualizarse.
  useEffect(
    function () {
      updateLoading(true)
      getGifts({ keyword: keywordToUse }).then((gift) => {
        setGifts(gift)
        updateLoading(false)
        if (keyword != null) localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, keywordToUse, setGifts]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return
      getGifts({ keyword: keywordToUse, page }).then((nextGifts) => {
        setGifts(prevGifts => prevGifts.concat(nextGifts))
      })
    }
    , [page])

  return { loading, gift, setPage }
}
