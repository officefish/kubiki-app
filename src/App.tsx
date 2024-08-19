
import './App.css'

import { BrowserRouter } from 'react-router-dom'
import Cabinet from './layout/cabinet'
import Providers from './providers'


function App() {

  return (
    <Providers>
      <BrowserRouter>
        <Cabinet />
      </BrowserRouter>
    </Providers>
  )
}

export default App
