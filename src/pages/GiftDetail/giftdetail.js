import { React, useContext } from 'react'
import Gift from '../../components/Gifts'
import GiftContext from '../../context/GiftsContext'
export const GiftDetail = ({ params }) => {
  const { gift } = useContext(GiftContext)
  const gif = gift.find((singleGift) => singleGift.id === params.id)
  return (
      <Gift {...gif} />
  )
}
