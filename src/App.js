import React from "react";
import {Header, Footer, CartContainer} from "./components";
import {Home, CreateContainer, ProductDetails, OrderNow, Success} from "./pages";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {useStateValue} from "./context/StateProvider";
import {useEffect} from "react";
import {getAllFoodItems} from "./utils/firebaseFunctions";
import {actionType} from "./context/reducer";
import { useState } from "react";

const App = () => {
  const [isMenu, setIsMenu] = useState(false)
	// const [{}, dispatch] = useStateValue();
	// const fetchData = async () => {
	// 	await getAllFoodItems().then((data) => {
	// 		dispatch({
	// 			type: actionType.SET_FOOD_ITEMS,
	// 			foodItems: data
	// 		});
	// 	});
	// };
	// useEffect(() => {
	// 	fetchData();
	// }, []);

	return (
		<AnimatePresence exitBeforeEnter>
			<div className="w-screen h-auto flex flex-col bg-primary">
				<Header isMenu={isMenu} setIsMenu={setIsMenu}/>

				<main className="w-full mt-14 md:mt-24 px-4 md:px-16 py-4">
					<Routes>
						<Route path="/*" element={<Home />} />
						<Route path="/createItem" element={<CreateContainer />} />
						<Route path="/product/:id" element={<ProductDetails />} />
						<Route path="/ordernow" element={<OrderNow />} />
						<Route path="/success" element={<Success />} />
					</Routes>
				</main>
				<CartContainer isMenu={isMenu} setIsMenu={setIsMenu}/>

				<Footer />
			</div>
		</AnimatePresence>
	);
};

export default App;
