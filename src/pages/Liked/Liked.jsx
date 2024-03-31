import React from 'react';
import LikedSection from '../../components/Liked/LikedSection';
import styles from './styles/Liked.module.scss';

const Liked = () => {
	return (
		<div className={styles.likeds}>
			<LikedSection />
		</div>
	);
};

export default Liked;
