import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const CartItem = ({product, isDetails}) => {
	return (
		<div className="w-full p-3 px-2 rounded-lg bg-cartItem flex items-center justify-center gap-2">
			<img
				src={product?.image}
				className="w-20 h-20 max-w-[60px] rounded-lg object-contain"
				alt=""
			/>
			{/* details section */}
			<div className="flex flex-col gap-2 mr-1">
				<p className="text-base text-gray-50">{product?.title}</p>
				<p className="text-sm block text-gray-300 font-semibold">
					$ {product?.price}
					{/* $ {parseFloat(product?.price) * qty} */}
				</p>
			</div>

			{/* button section */}
			<div className="group flex items-center gap-2 ml-auto cursor-pointer">
				<motion.div
					whileTap={{scale: 0.75}}
					// onClick={() => updateQty("remove", item?.id)}
				>
					<BiMinus className="rounded-full bg-orange-100 text-orange-600" />
				</motion.div>

				<p className="w-5 h-5 rounded-sm bg-cartItem text-gray-50 flex items-center justify-center">
					1
					
				</p>

				<motion.div
					whileTap={{scale: 0.75}}
					// onClick={() => updateQty("add", item?.id)}
				>
					<BiPlus className="rounded-full bg-orange-100 text-orange-600 " />
				</motion.div>
			</div>
		</div>
	);
};

export default CartItem;
