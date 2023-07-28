import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState()

  return (
    <>
     <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">{/* routes here */}</div>
    </div> 
    </>
  )
}

export default App
