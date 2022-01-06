import React, { useState } from 'react'

const Context = React.createContext({})

export function GiftContextProvider({ children }) {
  const [gift, setGifts] = useState([])

  return <Context.Provider value={{ gift, setGifts }}>{children}</Context.Provider>
}

export default Context
