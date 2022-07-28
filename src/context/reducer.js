export const actionType = {
	SET_USER: "SET_USER",
	SET_PRODUCTS: "SET_PRODUCTS"
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			console.log(action.user);
			return {...state, user: action.user, isAdmin: action.isAdmin};
		case actionType.SET_PRODUCTS:
			console.log(action.user);
			return {...state, products: action.products};
		default:
			return state;
	}
};

export default reducer;
