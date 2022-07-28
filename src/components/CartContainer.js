import React from "react";
import {MdOutlineKeyboardBackspace} from "react-icons/md";
import {RiRefreshFill} from "react-icons/ri";
import {motion} from "framer-motion";
import CartItem from "./CartItem";
import {useStateValue} from "../context/StateProvider";
import Button from "./Button";

const CartContainer = ({isMenu, setIsMenu}) => {
	const [{products}, dispatch] = useStateValue();

  const handleOrderNow = () => {
    setIsMenu(false)
  }

	return (
    <>
    {isMenu ? (
        <motion.div initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 200}} className="w-full md:w-375 h-screen bg-white drop-shadow-md z-[101] flex flex-col fixed top-0 right-0">
					<div className="w-full flex items-center justify-between p-4 cursor-pointer">
						<motion.div
							whileTap={{scale: 0.75}}
							onClick={() => setIsMenu(false)}
						>
							<MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
						</motion.div>
						<p className="text-textColor text-lg font-semibold">Cart</p>
						<motion.p
							whileTap={{scale: 0.75}}
							className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
						>
							Clear <RiRefreshFill />
						</motion.p>
					</div>
					{/* main section */}
					<div className="bg-cartBg w-full h-full rounded-t-[2rem] flex flex-col">
						<div className="w-full h-420 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll no-scrollbar">
							{/* cart item */}
							<CartItem product={products[0]} isDetails={false} />
						</div>
						{/* cart total section */}
						<div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
							<div className="w-full flex items-center justify-between">
								<p className="text-gray-400 text-lg">Sub Total</p>
								{/* <p className="text-gray-400 text-lg">$ {tot}</p> */}
							</div>
							<div className="w-full flex items-center justify-between">
								<p className="text-gray-400 text-lg">Delivery</p>
								<p className="text-gray-400 text-lg">$ 2.5</p>
							</div>

							<div className="w-full border-b border-gray-600 my-2"></div>

							<div className="w-full flex items-center justify-between">
								<p className="text-gray-200 text-xl font-semibold">
									Total
								</p>
								<p className="text-gray-200 text-xl font-semibold">
									{/* ${tot + 2.5} */}
								</p>
							</div>
							<Button text="Check Out" width="w-full" onClick={()=> handleOrderNow()}/>

						</div>
					</div>
		</motion.div>
			) : (
				<></>
			)}
				</>
	);
};

export default CartContainer;
