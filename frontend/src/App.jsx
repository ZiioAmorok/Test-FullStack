import './App.css'
import {  BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/auth"  element={<Auth />} />
        <Route path="/destinations" element={<ProtectedRoute><Destinations /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App
