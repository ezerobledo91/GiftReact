import { React } from 'react'
import { ListOfGifts } from 'components/ListOfGifts'
import { useGifts } from 'hooks/useGifts'

export const SearchResults = ({ params }) => {
  const { keyword } = params
  const { gift, loading } = useGifts({ keyword })
  return <>{loading ? <span> CARGANDO ..... </span> : <ListOfGifts gift={gift} />}</>
}
