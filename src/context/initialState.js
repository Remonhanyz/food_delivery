import { fetchUser, fetchIsAdmin, fetchCartItems } from "../utils/fetchLocalStorageData";

const getUser = fetchUser()
const admin = fetchIsAdmin()
const cart = fetchCartItems()

export const initialState = {
    user: getUser,
    products: [],
    isAdmin: admin,
    cartItems: cart
};

