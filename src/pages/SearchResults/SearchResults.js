import { React } from 'react'
import { ListOfGifts } from 'components/ListOfGifts'
import { useGifts } from 'hooks/useGifts'

export const SearchResults = ({ params }) => {
  const { keyword } = params
  const { gift, loading, setPage } = useGifts({ keyword })

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1)

  }
  return <>
    {loading ? <span> CARGANDO ..... </span> : <ListOfGifts gift={gift} />}
    <button onClick={handleNextPage}> Next page</button>
  </>
}
