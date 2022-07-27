import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const Home = () => {
	return (
		<section
			className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full"
			id="home"
		>
			<div className="py-2 gap-6 grid-span-1 flex flex-col items-start justify-center">
				<div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-2 rounded-full">
					<p className="text-base text-orange-600 font-semibold">
						Bike Delivery
					</p>
					<div className="w-7 h-7 rounded-full overflow-hidden drop-shadow-xl">
						<img
							src={Delivery}
							className="w-full h-full object-contain bg-white"
							alt="deliver"
						/>
					</div>
				</div>
				<p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor">
					The Fastest Delivery in{" "}
					<span className="text-orange-600 text-[3rem] lg:text-[5rem]">
						your city{" "}
					</span>
				</p>
				<p className="text-base text-Color text-center md:text-left md:w-[80%]">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
					itaque, quam deleniti vitae nostrum, delectus accusantium
					architecto alias iure ab sapiente ex dolor cum libero vero minima
					unde qui consequatur!
				</p>
				<button
					className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-ease-out"
					type="button"
				>
					Order Now
				</button>
			</div>
			<div className="py-2 grid-span-1 flex items-center relative">
				<img
					src={HeroBg}
					alt="hero-bg"
					className="h-420 w-full lg:w-auto lg:h-650 ml-auto"
				/>
				<div className="w-full h-full absolute overflow-x-hidden top-0 left-0 flex items-center justify-center py-4 flex-wrap gap-4 lg:px-16">
					{heroData &&
						heroData.map((data) => (
							<div
								key={data.id}
								className="xl:w-190 drop-shadow-lg  p-4 bg-cardOverlay backdrop-blur-lg  rounded-3xl flex-col flex items-center justify-center "
							>
								<img
									src={data.imageSrc}
									className="xl:w-40 w-20 xl:-mt-20 -mt-10"
									alt={data.name}
								/>
								<p className="xl:text-lg font tex-base semibold text-textColor mt-2 xl:mt-4">
									{data.name}
								</p>
								<p className="text-[15px] xl:text-sm text-lighttextGray font-semibold my-1 xl:my-3">
									{data.decp}
								</p>
								<p className="text-sm font-semibold text-headingColor">
									<span className="text-xs text-red-600">$</span>{" "}
									{data.price}
								</p>
							</div>
						))}
				</div>
			</div>
		</section>
	);
};

export default Home;
