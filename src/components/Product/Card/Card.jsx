import React, { useContext } from 'react';
import { IoHeartOutline } from 'react-icons/io5';
import styles from './Card.module.scss';
import { Context } from '../../../Context/Cart';
import { Button } from '../../../Ui/index';

export const Card = ({ id, count, title, imageUrl, price }) => {
	const { handleAddCardCart, handleAddCardLiked } = useContext(Context);

	const cardProps = {
		id,
		count,
		title,
		imageUrl,
		price,
	};

	return (
		<article className={styles.card}>
			<div className={styles.content}>
				<div className={styles.images}>
					<img src={imageUrl} alt={title} />
					<button onClick={() => handleAddCardLiked(cardProps)}>
						<IoHeartOutline />
					</button>
				</div>
				<div className={styles.info}>
					<strong>{title}</strong>
					<span>{price} ₸</span>
				</div>
			</div>
			<div className={styles.hover}>
				<Button onClick={() => handleAddCardCart(cardProps)} styles={{ width: 100 }}>
					Add card
				</Button>
			</div>
		</article>
	);
};
