import React from "react";
import HeroBanner from "../components/HeroBanner";
import Loader from "../components/Loader";
import SearchProducts from "../components/SearchProducts";
import Products from "../components/Products";

const MainContainer = () => {
	return (
		<div className="w-full h-auto flex flex-col items-center justify-center">
			<HeroBanner />
			<SearchProducts />
			<Products />
		</div>
	);
};

export default MainContainer;
