import React from 'react'
import { Card } from './Card/Card'
import styles from './Product.module.scss'
import { cards } from './data'

const Product = () => {
	return (
		<div className={styles.blockCard}>
			{cards.map(card => (
				<Card key={card.id} {...card} />
			))}
		</div>
	)
}

export default Product
