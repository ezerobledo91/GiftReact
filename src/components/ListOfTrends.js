import React from 'react'
import { Link } from 'wouter'

export const ListOfTrends = ({ name, option }) => {
const style= {
  textTransform: 'capitalize',
  padding:'5px'
}


  return (
    <>
      <h4>{name}</h4>
      <div className='container-tendencias'>
        {option.map((popular_routes) => (
          <span key={popular_routes} style={style}>
            <Link to={`search/${popular_routes}`}>{popular_routes}</Link>
          </span>
        ))}
      </div>
    </>
  )
}
