import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Services from './pages/services/Services'
import './style.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/portfolio"></Route>
        <Route path="/skill"></Route>
        <Route path="/experience"></Route>
        <Route path="/contact"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
