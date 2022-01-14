import React from 'react'
import Gift from './Gifts'

export const ListOfGifts = ({ gift }) => {
  return (
    <div className='collection'>
      {gift.map(({ title, id, url }) => (
        <Gift title={title} id={id} url={url} key={id} />
      ))}
  </div>
  )
}
