import React, { useContext } from 'react';
import styles from './LikedSection.module.scss';
import { Context } from '../../Context/Cart';
import { Card } from './Card/Card';
import { Title } from '../../Ui/index';

const LikedSection = () => {
	const { liked } = useContext(Context);

	return (
		<>
			{liked.length > 0 ? (
				<div className={styles.likedCon}>
					<Title style={{ marginBottom: 13 }}>Понравившиеся товары</Title>
					<div className={styles.container}>
						{liked.map(t => (
							<Card key={t.id} {...t} />
						))}
					</div>
				</div>
			) : (
				<div className={styles.empty}>Пусто</div>
			)}
		</>
	);
};

export default LikedSection;
