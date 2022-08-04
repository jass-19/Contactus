import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

const Popup = ({ showName, handleClose }) => {
  // color-change-state
  const [color, setcolor] = useState(false)
  const ChangeColor = () => {
    setcolor(!color)
  }
  return (
    <Modal show={showName} onHide={showName}>
      <Modal.Header>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        I will not close if you click outside me. Don't even try to press escape
        key.
        <br />
        <br />
        <p className={`${color ? 'text-info' : 'text-danger'}`}>Change color</p>
        <button onClick={() => ChangeColor()}>Change the Color Of text</button>
      </Modal.Body>
      <Modal.Footer>
        <button onClick={() => handleClose()}>Close</button>
      </Modal.Footer>
    </Modal>
  )
}

export default Popup
