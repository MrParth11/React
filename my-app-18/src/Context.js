import React, { useState } from 'react'
import ContextValue from './CreateContext'

export default function Context({children}) {

    const [mode, setMode] = useState('light')

    const differentMode = ()=> {

        if(mode === "light"){
            setMode('dark')
        }
        else{
            setMode('light')
        }

    }

  return (
   <ContextValue.Provider value={{mode, differentMode}}>
    {children}
   </ContextValue.Provider>
  )
}
