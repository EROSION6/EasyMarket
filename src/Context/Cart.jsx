import { createContext, useState } from 'react';

export const Context = createContext();

export const AppContext = ({ children }) => {
	const [cart, setCart] = useState([]);
	const [liked, setLiked] = useState([]);

	const handleAddItem = (item, state, setStateFunc) => {
		const find = state.find(card => card.id === item.id);

		if (find) {
			state.map(i => {
				if (i.id === item.id) {
					return {
						...card,
						count: card.count + 1,
					};
				} else {
					return card;
				}
			});
		} else {
			setStateFunc([...state, item]);
		}
	};

	const handleAddCardCart = item => {
		handleAddItem(item, cart, setCart);
	};

	const handleAddCardLiked = item => {
		handleAddItem(item, liked, setLiked);
	};

	const handleDeleteItem = (id, state, setStateFunc) => {
		setStateFunc(state.filter(item => item.id !== id));
	};

	const handleDeleteCardCart = id => {
		handleDeleteItem(id, cart, setCart);
	};

	const handleDeleteCardLiked = id => {
		handleDeleteItem(id, liked, setLiked);
	};

	return (
		<Context.Provider
			value={{
				cart,
				setCart,
				liked,
				handleAddCardCart,
				handleAddCardLiked,
				handleDeleteCardCart,
				handleDeleteCardLiked,
			}}>
			{children}
		</Context.Provider>
	);
};
