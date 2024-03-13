import React from 'react'
import styles from './Title.module.scss'

export const Title = ({ children, ...props}) => {
	return <h2 {...props} className={styles.title}>{children}</h2>
}
