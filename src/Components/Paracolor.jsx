import Modalfile from '../Components/Modalfile'
import React from 'react'

import { useState } from 'react'

const ButtonColor = () => {
  const [show, setshow] = useState(false)

  // Modal-open-state
  const ShowModal = () => {
    setshow(true)
  }
  const CloseModal = () => {
    setshow(false)
  }
  return (
    <>
      <div>
        <button className="my-5" onClick={ShowModal}>
          Click to see magic
        </button>

        {/* Assign value to another file  as Props/State   */}
        <Modalfile showName={show} handleClose={CloseModal} />
      </div>
    </>
  )
}

export default ButtonColor
