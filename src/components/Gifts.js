import React from 'react'
import './gifts.css'
import { Link } from 'wouter'

const Gift = ({ title = 'not found', id='', url='https://media3.giphy.com/media/9J7tdYltWyXIY/200.gif?cid=118118063asj42x0mecsf9ilimovu5sapaqcodw9y0pasgq0&rid=200.gif&ct=g' }) => {
  return (
    <div className='gift'>
      <h4>{title.length > 15 ? title.substring(0, 15) : title}</h4>
      <Link to={`/gift/${id}`}>
        <img className='gift' src={url} key={id} alt={title} />
      </Link>
    </div>
  )
}

export default Gift
