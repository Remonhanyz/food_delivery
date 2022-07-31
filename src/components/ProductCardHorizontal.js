import React from "react";
import {useStateValue} from "../context/StateProvider";
import {Link} from "react-router-dom";
import {MdAddShoppingCart} from "react-icons/md";
import {motion} from "framer-motion";
import {actionType} from "../context/reducer";

const ProductCardHorizontal = ({product}) => {
	const [{cartItems}, dispatch] = useStateValue();

	const addToCart = async () => {
		const itemId = cartItems.findIndex(
			(cartItem, index) => cartItem.id === product.id
		);
		if (itemId >= 0) {
			const cartItem = {
				...cartItems[itemId],
				qty: cartItems[itemId].qty + 1
			};

			dispatch({
				type: actionType.SET_CART_ITEMS,
				cartItems: [
					...cartItems.slice(0, itemId),
					cartItem,
					...cartItems.slice(itemId + 1)
				]
			});
			localStorage.setItem(
				"cartItems",
				JSON.stringify([
					...cartItems.slice(0, itemId),
					cartItem,
					...cartItems.slice(itemId + 1)
				])
			);
		} else {
			product = {...product, qty: 1};

			dispatch({
				type: actionType.SET_CART_ITEMS,
				cartItems: [...cartItems, product]
			});
			localStorage.setItem(
				"cartItems",
				JSON.stringify([...cartItems, product])
			);
		}
	};

	return (
		<div className="my-2 w-full p-6 px-2 rounded-lg bg-white flex items-center justify-center mr-auto">
			<Link
				to={`/product/${product.id}`}
				className="flex items-center justify-center h-full mr-auto w-full"
			>
				<img
					src={product?.image}
					className="w-20 h-20 max-w-[60px] rounded-lg object-contain mr-3 ml-1"
					alt=""
				/>
				{/* details section */}
				<div className="flex flex-col gap-2 mr-1 w-full">
					<p className="text-base text-textColor">{product?.title}</p>
					<div className="text-sm text-gray-700 font-semibold  w-full flex flex-col sm:flex-row">
						$ {product?.price}
					</div>
				</div>
				<div className=" flex flex-col items-center align-center h-full">
					<div className="whitespace-nowrap bg-orange-100 px-4 rounded-full mt-auto ml-auto z-40">
						<p className=" text-[15px] xl:text-xs text-base text-orange-600 font-semibold my-1 xl:my-2">
							{product.category}
						</p>
					</div>
				</div>
			</Link>
			<div
				onClick={(e) => addToCart()}
				className="ml-auto mr-3 mb-auto"
			>
				<motion.div
					whileTap={{scale: 0.75}}
					className="z-40 p-2 bg-orange-100 rounded-full"
				>
					<MdAddShoppingCart className="text-textColor test-xl cursor-pointer" />
				</motion.div>
			</div>
		</div>
	);
};

export default ProductCardHorizontal;
