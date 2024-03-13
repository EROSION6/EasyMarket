import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ children, ...props }) => {
	return <button {...props} className={styles.btn}>{children}</button>
}
