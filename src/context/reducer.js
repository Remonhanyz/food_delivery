export const actionType = {
	SET_USER: "SET_USER",
	SET_PRODUCTS: "SET_PRODUCTS",
	SET_CART_ITEMS: "SET_CART_ITEMS"
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			return {...state, user: action.user, isAdmin: action.isAdmin};
		case actionType.SET_PRODUCTS:
			return {...state, products: action.products};
		case actionType.SET_CART_ITEMS:
			console.log({...state, cartItems: action.cartItems});
			return {...state, cartItems: action.cartItems};
		default:
			return state;
	}
};

export default reducer;
