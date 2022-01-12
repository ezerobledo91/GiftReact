import React from 'react'
import { Link } from 'wouter'

export const ListOfTrends = ({ name, option }) => {
const style= {
  textTransform: 'capitalize'
}


  return (
    <>
      <h4>{name}</h4>
      <ul>
        {option.map((popular_routes) => (
          <li key={popular_routes} style={style}>
            <Link to={`search/${popular_routes}`}>{popular_routes}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}
