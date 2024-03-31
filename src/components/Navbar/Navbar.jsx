import React, { useContext, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'
import { LuShoppingCart } from 'react-icons/lu'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../Context/Cart'
import styles from './Navbar.module.scss'

const option = [
	{ name: 'Apple', value: 'Apple' },
	{ name: 'INOI', value: 'Apple' },
	{ name: 'Nokia', value: 'Nokia' },
	{ name: 'Oppo', value: 'Oppo' },
	{ name: 'Xiaomi', value: 'Xiaomi' },
	{ name: 'Realme', value: 'Realme' },
	{ name: 'Samsung', value: 'Samsung' },
	{ name: 'Sony', value: 'Sony' },
	{ name: 'Vivo', value: 'Vivo' },
]

export const Navbar = () => {
	const [isOpen, setOpen] = useState(false)
	const { cart } = useContext(Context)

	const navigate = useNavigate()

	const totalCount = cart.reduce((acc, count) => acc + count.count, 0)

	return (
		<div className={styles.header}>
			<header>
				<div className={styles.left}>
					<div className={styles.logo}>
						<Link to='/'>
							<h1>QPICK</h1>
						</Link>
					</div>
					<div className={!isOpen ? styles.option : styles.close}>
						<form>
							<label for='tel-select'>Выбрать модель телефона</label>
							<select name='tel' id='tel-select'>
								{option.map(opt => (
									<option value={opt.value}>{opt.name}</option>
								))}
							</select>
						</form>
						<button className={styles.cross} onClick={() => setOpen(!isOpen)}>
							<RxCross2 />
						</button>
					</div>
				</div>
				<div className={styles.right}>
					<button onClick={() => navigate('/cart')}>
						<span>
							<b>{totalCount}</b>
						</span>
						<span>
							<LuShoppingCart />
						</span>
					</button>
					<button onClick={() => navigate('/liked')}>
						<IoHeartOutline />
					</button>
					<button onClick={() => setOpen(false)}>
						<RxHamburgerMenu />
					</button>
				</div>
			</header>
		</div>
	)
}
