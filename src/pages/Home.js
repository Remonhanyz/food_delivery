import React, {useState} from "react";
import HeroBanner from "../components/HeroBanner";
import Loader from "../components/Loader";
import SearchProducts from "../components/SearchProducts";
import Products from "../components/Products";

const MainContainer = () => {
	const [orientation, setOrientation] = useState('verticle')

	return (
		<div className="w-full h-auto flex flex-col items-center justify-center">
			<HeroBanner />
			<SearchProducts orientation={orientation} setOrientation={setOrientation}/>
			<Products orientation={orientation}/>
		</div>
	);
};

export default MainContainer;
