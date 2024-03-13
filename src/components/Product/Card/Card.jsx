import React, { useContext } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import styles from './Card.module.scss'
import { Context } from '../../../Context/Cart'

export const Card = ({ id, count, title, imageUrl, price }) => {
	const { handleAddCard } = useContext(Context)

	const cardProps = {
		id,
		count,
		title,
		imageUrl,
		price,
	}

	return (
		<article className={styles.card}>
			<div className={styles.images}>
				<img src={imageUrl} alt={title} />
				<button onClick={() => handleAddCard(cardProps)}>
					<IoHeartOutline />
				</button>
			</div>
			<div className={styles.info}>
				<h5>{title}</h5>
				<span>{price} ₸</span>
			</div>
		</article>
	)
}
