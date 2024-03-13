import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTelegram, FaWhatsapp } from 'react-icons/fa6'
import { SlSocialVkontakte } from 'react-icons/sl'
import styles from './Footer.module.scss'

const links = ['Избранное', 'Корзина', 'Контакты']

const icons = [
	<SlSocialVkontakte />,
	<FaInstagram />,
	<FaTelegram />,
	<FaWhatsapp />,
]

const Footer = () => {
	return (
		<footer>
			<div className={styles.footers}>
				<div className={styles.logo}>
					<h1>QPICK</h1>
				</div>
				<nav className={styles.linksItem}>
					{links.map((link, index) => (
						<a key={index} href='#'>
							{link}
						</a>
					))}
				</nav>
				<div className={styles.conditions}>
					<span>Условия сервиса</span>
				</div>
				<div className={styles.iconsItem}>
					{icons.map((icon, index) => (
						<span key={index}>{icon}</span>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
