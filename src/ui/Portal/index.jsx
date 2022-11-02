import React from 'react'
import { createPortal } from 'react-dom'

const Portal = ({children, element = document.body}) => {
  return (createPortal(children, element)
  )
}

export default Portal