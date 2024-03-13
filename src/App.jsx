import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from './Context/Cart'
import Footer from './components/Footer/Footer'
import { Navbar } from './components/Navbar/Navbar'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import Liked from './pages/Liked/Liked'

const App = () => {
	return (
		<AppContext>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='liked' element={<Liked />} />
			</Routes>
			<Footer />
		</AppContext>
	)
}

export default App
