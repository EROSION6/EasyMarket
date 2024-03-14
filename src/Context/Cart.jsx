import { createContext, useState } from 'react'

export const Context = createContext()

export const AppContext = ({ children }) => {
	const [carts, setCarts] = useState([])

	const handleAddCard = ({ id, title, imageUrl, price, count }) => {
		const find = carts.find(item => item.id === id)
		if (find) {
			setCarts(
				carts.map(item => {
					if (item.id === id) {
						return {
							...item,
							count: item.count + 1,
						}
					} else {
						return item
					}
				})
			)
		} else {
			setCarts([
				...carts,
				{
					id,
					title,
					imageUrl,
					price,
					count,
				},
			])
		}
	}

	const handleDeleteCard = id => {
		setCarts(carts.filter(item => item.id !== id))
	}

	return (
		<Context.Provider
			value={{
				carts,
				setCarts,
				handleAddCard,
				handleDeleteCard,
			}}
		>
			{children}
		</Context.Provider>
	)
}
