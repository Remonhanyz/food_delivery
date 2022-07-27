import { fetchUser, fetchIsAdmin } from "../utils/fetchLocalStorageData";

const getUser = fetchUser()
const admin = fetchIsAdmin()
export const initialState = {
	user: getUser,
    isAdmin: admin
};

