import React from 'react'
import { CartSection } from '../../components/Cart/CartSection'
import styles from './styles/Cart.module.scss'

const Cart = () => {
	return (
		<div className={styles.cart}>
			<CartSection/>
		</div>
	)
}

export default Cart
