import React, {useEffect, useState} from "react";
import ProductCardVertical from "./ProductCardVertical";
import {useStateValue} from "../context/StateProvider";

const Products = () => {
	const [{products}, dispatch] = useStateValue();

	return (
		<div id="products" className="container my-2 mx-auto px-4 md:px-12">
			<div
				className="flex flex-wrap -mx-1 lg:-mx-4"
			>
				{products.map((product, index) => (
					<ProductCardVertical key={index} product={product} />
				))}
			</div>
		</div>
	);
};

export default Products;
