import React from 'react'
import Cars from './Cars'
import Students from './Students'
import AnimatedComponent from './AnimatedComponent'

const App = () => {
  return (
    <div>
      <h1>Templates: </h1>
      <Cars bg="yellow"></Cars>
      <Students></Students>
      <AnimatedComponent></AnimatedComponent>
    </div>
  )
}

export default App

