import React, { useState } from 'react'

const Learn = () => {
  const [changeColor, setChangeColor] = useState(false)
  const [changeColor2, setChangeColor2] = useState(false)

  // console.log('fghjk', changeColor)
  const changeColorHandler = () => {
    setChangeColor2(!changeColor2)
  }
  return (
    <div>
      <p className={`${changeColor ? 'text-warning' : 'text-dark'}`}>
        Change Color
      </p>
      <button onClick={() => setChangeColor(!changeColor)}>Change</button>

      <p className={`${changeColor2 ? 'text-info' : 'text-dark'}`}>
        Change Color
      </p>

      <input type="text" />
      <button onClick={() => changeColorHandler()}>Change</button>
    </div>
  )
}
export default Learn
