import React from "react";
import {Link} from "react-router-dom";
import {MdAddShoppingCart} from "react-icons/md";

const ProductCardVertical = ({product}) => {
	return (
		<div className="my-2 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
			<div
				className="drop-shadow-lg p-4 bg-white backdrop-blur-lg rounded-3xl lg:h-[28rem] "
				key={product.id}
			>
				<div className="flex flex-row">
					<button className=" z-40">
						<MdAddShoppingCart className="text-textColor test-2xl cursor-pointer" />
					</button>
					<div className="bg-orange-100 px-4 rounded-full ml-auto z-40">
						<p className=" text-[15px] xl:text-xs text-base text-orange-600 font-semibold -mt-8 -mr-auto my-1 xl:my-2">
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
