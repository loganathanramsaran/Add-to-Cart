import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Header } from './components/header'
import { Home } from './components/Home'
import { Cart } from './components/Cart'

function App() {



  return (
    <>
      <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Cart' element={<Cart/>} />
        </Routes>
      </div>
      </BrowserRouter>
    </>
  )
}

export default App
