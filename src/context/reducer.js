export const actionType = {
	SET_USER: "SET_USER",
	SET_FOOD_ITEMS: "SET_FOOD_ITEMS"
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			console.log(action.user);
			return {...state, user: action.user, isAdmin: action.isAdmin};
		case actionType.SET_FOOD_ITEMS:
			console.log(action.user);
			return {...state, foodItems: action.foodItems};
		default:
			return state;
	}
};

export default reducer;
