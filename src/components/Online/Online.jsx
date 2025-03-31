import React from 'react'

function Online({isOnline}) {
  return (
    <div>{isOnline?<span className='.dotGreen'></span>
        :<span className='dotRed'></span>}</div>
  )
}

export default Online