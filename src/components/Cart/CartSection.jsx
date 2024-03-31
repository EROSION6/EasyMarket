import React, { useContext } from 'react';
import { Context } from '../../Context/Cart';
import { Button, Title } from '../../Ui/index';
import { Card } from './Card/Card';
import styles from './CartSection.module.scss';
import { Empty } from './Empty/Empty';

export const CartSection = () => {
	const { cart } = useContext(Context);

	const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

	return (
		<div className={styles.cartSection}>
			<Title style={{ marginBottom: 13 }}>Корзина</Title>
			{cart.length > 0 ? (
				<div className={styles.cartsBlock}>
					<div className={styles.cartCard}>
						<div className={styles.cartScroll}>
							{cart.map(cart => (
								<Card key={cart.id} {...cart} />
							))}
						</div>
					</div>
					<div className={styles.price}>
						<div className={styles.total}>
							<span>Итого</span>
							<span>{totalPrice} ₸</span>
						</div>
						<Button style={{ width: '100%' }}>Перейти к оформлению</Button>
					</div>
				</div>
			) : (
				<Empty />
			)}
		</div>
	);
};
