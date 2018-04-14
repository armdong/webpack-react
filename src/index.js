import React from 'react'
import { render } from 'react-dom'

const App = () => (
  <div className="container">
    <h1>Webpack React Starter</h1>
  </div>
)

render(
  <App />,
  document.querySelector('#root')
)