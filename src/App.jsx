import './App.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  

  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
