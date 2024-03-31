import React, { useContext } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import { Context } from '../../../Context/Cart';
import styles from './Card.module.scss';

export const Card = ({ id, title, imageUrl, price }) => {
	const { handleDeleteCardCart } = useContext(Context);

	return (
		<article className={styles.card}>
			<div className={styles.content}>
				<div className={styles.images}>
					<img src={imageUrl} alt={title} />
					<button onClick={() => handleDeleteCardCart(id)}>
						<IoHeartOutline style={{ color: 'red' }} />
					</button>
				</div>
				<div className={styles.info}>
					<strong>{title}</strong>
					<span>{price} ₸</span>
				</div>
			</div>
		</article>
	);
};
