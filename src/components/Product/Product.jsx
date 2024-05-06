import React, { useEffect, useState } from 'react'
import { Card } from './Card/Card'
import styles from './Product.module.scss'

const Product = () => {
	const [product, setProduct] = useState([])
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		const fetchCard = async () => {
			try {
				const response = await fetch('https://d10f7fc00f084b36.mokky.dev/cart')

				if (!response.ok) {
					throw new Error('An error occurred when receiving goods')
				}
				setProduct(await response.json())
			} catch {
				setLoading(false)
			}
		}
		fetchCard()
	}, [])

	if (!isLoading) return <div style={{ fontSize: '32px', fontWeight: 'bold' }}>Loading...</div>

	return (
		<div className={styles.blockCard}>
			{product.map(card => (
				<Card key={card.id} {...card} />
			))}
		</div>
	)
}

export default Product
