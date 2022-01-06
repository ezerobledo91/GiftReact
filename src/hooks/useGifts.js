import { useContext ,useEffect, useState } from 'react'
import getGifts from '../services/getGifts'
import GiftContext  from '../context/GiftsContext'
export const useGifts = ({ keyword } = { keyword: null }) => {
  // const [gifts, updateGifts] = useState([]) // Destructuracion del useState.
   const {gift, setGifts} = useContext(GiftContext)
  const [loading, updateLoading] = useState(false) // Un useState para poner un loading

  // Se ejecuta el efecto cuando se renderiza el componente y solo una vez ya que no tiene dependencias en el array de dependencias osea de que depende para actualizarse.
  useEffect(
    function () {
      const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'popular'
      updateLoading(true)
      getGifts({ keyword: keywordToUse }).then((gift) => {
       setGifts(gift)
        updateLoading(false)
        if (keyword != null) localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword,setGifts]
  )

  return { loading, gift }
}
