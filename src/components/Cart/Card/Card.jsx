import React, { useContext } from 'react'
import { BsCartX } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import { HiOutlineMinusSm } from 'react-icons/hi'
import { Context } from '../../../Context/Cart'
import styles from './Card.module.scss'

export const Card = ({ id, title, imageUrl, price, count }) => {
	const { setCarts, handleDeleteCard } = useContext(Context)

	const increment = id => {
		setCarts(carts =>
			carts.map(item =>
				id === item.id
					? { ...item, count: item.count < 10 ? item.count + 1 : 1 }
					: item
			)
		)
	}

	const decrement = id => {
		setCarts(carts =>
			carts.map(item =>
				id === item.id
					? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
					: item
			)
		)
	}

	return (
		<article className={styles.card}>
			<div className={styles.top}>
				<div className={styles.images}>
					<img src={imageUrl} alt={title} />
					<button onClick={() => handleDeleteCard(id)}>
						<BsCartX />
					</button>
				</div>
				<div className={styles.info}>
					<h5>{title}</h5>
					<span>{price} ₸</span>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.counter}>
					<button onClick={() => increment(id)}>
						<GoPlus />
					</button>
					<b>{count}</b>
					<button onClick={() => decrement(id)}>
						<HiOutlineMinusSm />
					</button>
				</div>
				<span>{price * count} ₸</span>
			</div>
		</article>
	)
}
