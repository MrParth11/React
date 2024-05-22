import React from 'react'
import Hoc from './Hoc'

function Data_1({money,handleIncrease}) {
  return (
<div className="data-container">
<h1 className="title">Parth:{money}</h1>
<button className="button" onClick={handleIncrease}>Click Me!</button>

        

    </div>
  )
}

export default Hoc(Data_1)