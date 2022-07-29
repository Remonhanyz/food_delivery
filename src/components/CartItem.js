import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import {TiDelete} from "react-icons/ti";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({ product, isDetails, setTot }) => {
	
	const [{cartItems}, dispatch] = useStateValue();

	const addToCart = async (itemId) => {
				
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
	}

	const reduceFromCart = async (itemId) => {
			const cartItem = {
				...cartItems[itemId],
				qty: cartItems[itemId].qty - 1
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
	}

		const removeFromCart = async (itemId) => {
			
			dispatch({
				type: actionType.SET_CART_ITEMS,
				cartItems: [
					...cartItems.slice(0, itemId),
					...cartItems.slice(itemId + 1)
				]
			});
			localStorage.setItem(
				"cartItems",
				JSON.stringify([
					...cartItems.slice(0, itemId),
					...cartItems.slice(itemId + 1)
				])
			);
	}


	const updateCart = async (state) => {
		const itemId = cartItems.findIndex(
			(cartItem, index) => cartItem.id === product.id
		);
if (state==='add')addToCart(itemId)
if (state==='reduce')reduceFromCart(itemId)
if (state==='remove')removeFromCart(itemId)

	};

useEffect(()=>{
	let totalPrice = cartItems.reduce(function (accumulator, item) {
			return accumulator + item.qty * item.price;
		}, 0);
		setTot(totalPrice);
},[product.qty])

	return (
		<div className="w-full p-3 px-2 rounded-lg bg-white flex items-center justify-center gap-2">
			<img
				src={product?.image}
				className="w-20 h-20 max-w-[60px] rounded-lg object-contain mr-3 ml-1"
				alt=""
			/>
			{/* details section */}
			<div className="flex flex-col gap-2 mr-1 w-full">
				<p className="text-base text-textColor">{product?.title}</p>
				<div className="text-sm text-gray-700 font-semibold  w-full flex flex-col sm:flex-row">
					<div className="flex sm:flex-row flex-col">
						{isDetails && <div className="font-bold ">sub-total: </div>}
						<div className="text-red-500 ml-14 sm:ml-2">
							$ {product?.price}
						</div>
					</div>
					{isDetails && (
						<div className="sm:ml-auto flex sm:flex-row flex-col">
							<div className="font-bold">Total: </div>
							<div className="text-red-500 ml-8 sm:ml-2 md:mr-10 md:mr-52">
								$ {parseFloat(product?.price) * product.qty}
							</div>
						</div>
					)}
				</div>
			</div>

			{/* buttons section */}
			<div className="group flex items-center gap-2 ml-auto cursor-pointer">
				<motion.div whileTap={{scale: 0.75}} onClick={() => updateCart('reduce')}>
					<BiMinus className="rounded-full bg-orange-100 text-orange-600" />
				</motion.div>

				<p className="w-5 h-5 rounded-sm bg-cartItem text-gray-50 flex items-center justify-center">
					{product.qty}
				</p>

				<motion.div
					whileTap={{scale: 0.75}}
					onClick={() => updateCart("add")}
				>
					<BiPlus className="rounded-full bg-orange-100 text-orange-600 " />
				</motion.div>
			</div>
			{/* delete */}
				<motion.div
					whileTap={{scale: 0.75}}
					onClick={() => updateCart("remove")}
				>
					<TiDelete className="rounded-full cursor-pointer text-xl text-orange-600 " />
				</motion.div>
		</div>
	);
};

export default CartItem;
