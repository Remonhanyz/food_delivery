import React, {useEffect, useState} from "react";
import ProductCardVertical from "./ProductCardVertical";
import {useStateValue} from "../context/StateProvider";
import ProductCardHorizontal from './ProductCardHorizontal'

const Products = ({orientation}) => {
	const [{products}, dispatch] = useStateValue();

	return (
		<div id="products" className={`container  my-2 mx-auto px-4 md:px-12`}>
			<div
				className={`flex flex-wrap ${orientation=='verticle' && '-mx-1 lg:-mx-4'}`}
			>
				{products.map((product, index) => (
				orientation =='verticle'?
				(<ProductCardVertical key={index} product={product} />)
			:	(<ProductCardHorizontal key={index} product={product}/>)

			
				))}
			</div>
		</div>
	);
};

export default Products;
