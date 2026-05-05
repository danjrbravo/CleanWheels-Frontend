import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Catalog from './pages/Catalog/Catalog'
import Admin from './pages/Admin/Admin'
import Callback from './pages/Callback/Callback'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/google/callback" element={<Callback />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App