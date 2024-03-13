import React from 'react'
import iphone from '../../assets/iPhone-13-Pro-Max-silver-1000x1000 1.svg'
import styles from './Banner.module.scss'

const Banner = () => {
	return (
		<div className={styles.banner}>
			<div className={styles.title}>
				<h2>Аксессуары для Iphone 13 Pro Max</h2>
			</div>
			<div className={styles.image}>
				<img src={iphone} alt='iphone' />
			</div>
		</div>
	)
}

export default Banner
