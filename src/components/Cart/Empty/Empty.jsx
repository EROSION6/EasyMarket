import React from 'react'
import { Button } from '../../../Ui/Button/Button'
import empty from '../../../assets/Illustration.svg'
import styles from './Empty.module.scss'

export const Empty = () => {
	return (
		<div className={styles.cart}>
			<div className={styles.image}>
				<img src={empty} alt='empty' />
			</div>
			<div className={styles.text}>
				<h2>Корзина пуста</h2>
				<p>Но это никогда не поздно исправить :)</p>
				<Button style={{ width: '100%' }}>В каталоге товаров</Button>
			</div>
		</div>
	)
}
