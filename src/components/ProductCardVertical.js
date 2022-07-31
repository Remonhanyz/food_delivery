import React from "react";
import {Link} from "react-router-dom";
import {MdAddShoppingCart} from "react-icons/md";
import {useStateValue} from "../context/StateProvider";
import {motion} from "framer-motion";
import {actionType} from "../context/reducer";

const ProductCardVertical = ({product}) => {
	const [{cartItems}, dispatch] = useStateValue();
	
	const addToCart = async () => {
		
		const itemId = cartItems.findIndex((cartItem, index) => 
			cartItem.id === product.id
		);
		if(itemId >= 0){
			const cartItem = {
				...cartItems[itemId],
				qty: cartItems[itemId].qty + 1
			};
			
			dispatch({
				type: actionType.SET_CART_ITEMS,
				cartItems: [...cartItems.slice(0, itemId), cartItem, ...cartItems.slice(itemId+1)]
			});
			localStorage.setItem(
				"cartItems",
				JSON.stringify([...cartItems.slice(0, itemId), cartItem, ...cartItems.slice(itemId+1)]))

		} else {
			product = {...product, qty: 1};
			
			dispatch({
				type: actionType.SET_CART_ITEMS,
				cartItems: [...cartItems, product]
			});
			localStorage.setItem(
				"cartItems",
				JSON.stringify([...cartItems, product]))
		}
	};

	return (
		<div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
			<div
				className="drop-shadow-lg p-4 bg-white rounded-3xl lg:h-[28rem] "
				key={product.id}
			>
				<div className="flex flex-row">
					<div onClick={(e) => addToCart()}>
						<motion.div
							whileTap={{scale: 0.75}}
							className="z-40 p-2 bg-orange-100 rounded-full"
						>
							<MdAddShoppingCart className="text-textColor test-xl cursor-pointer" />
						</motion.div>
					</div>
					<div className="bg-orange-100 px-4 rounded-full ml-auto z-40">
						<p className=" text-[15px] xl:text-xs text-base text-orange-600 font-semibold md:-mt-8 -mr-auto my-1 xl:my-2">
							{product.category}
						</p>
					</div>
				</div>
				<Link
					to={`/product/${product.id}`}
					className="flex flex-col items-center justify-center h-full"
				>
					<div className="flex items-center justify-center lg:h-[15rem] lg:mb-3">
						<img
							src={product.image}
							className="block lg:w-40 w-20 "
							alt={product.title}
						/>
					</div>
					<p className="xl:text-lg text-center text-base semibold text-textColor mt-2 xl:mt-4">
						{product.title}
					</p>
					{/* <div className=""> */}

					<p className="bg-red-100 px-4 py-3 rounded-full z-40 text-sm font-semibold text-red-600  mt-auto align-bottom mb-1">
						<span className="text-xs text-headingColor">$</span>{" "}
						{product.price}
					</p>
					{/* </div> */}
				</Link>
			</div>
		</div>
	);
};

export default ProductCardVertical;
