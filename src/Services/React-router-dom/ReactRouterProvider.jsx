import React from 'react'
import { BrowserRouter } from 'react-router-dom'

function ReactRouterProvider({ children }) {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default ReactRouterProvider