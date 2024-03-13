import React from 'react'
import Banner from '../../components/Banner/Banner'
import Product from '../../components/Product/Product'
import styles from './styles/Home.module.scss'

const Home = () => {
	return (
		<main className={styles.home}>
			<Banner />
			<section>
				<div className={styles.container}>
					<div className={styles.title}>
						<h2>Наушники</h2>
					</div>
					<Product />
				</div>
			</section>
		</main>
	)
}

export default Home
