import React, {useEffect, useState} from "react";
// import { exerciseOptions, fetchData } from '../utils/fetchData'
import axios from "axios";
import Button from "./Button";
import {useStateValue} from "../context/StateProvider";
import {actionType} from "../context/reducer";

const SearchExercises = () => {
	const [search, setSearch] = useState("");
	const [{products}, dispatch] = useStateValue();

	useEffect(() => {
		const fetchProductsData = async () => {
			const productsData = await axios
				.get("https://fakestoreapi.com/products")
				.then((res) => {
					dispatch({
						type: actionType.SET_PRODUCTS,
						products: res.data
					});
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		fetchProductsData();
	}, []);

	const handleSearch = async () => {
		if (search) {
			const productsData = await axios
				.get("https://fakestoreapi.com/products")
				.then((res) => {
					const searchedProducts = res.data.filter((product) => 
						product.title.toLowerCase().includes(search) ||
						product.category.toLowerCase().includes(search)
					);
					dispatch({
						type: actionType.SET_PRODUCTS,
						products: searchedProducts
					});
				})
				.catch((err) => {
					console.log(err);
				});
		}
	};

	return (
		<div className="w-full items-center mt-20 justify-center">
			<div className="w-full mb-14 font-bold lg:text-[3.5rem] text-[2.5rem] text-center tracking-wide text-headingColor">
				Store Products
			</div>
			<div className="relative mb-20 flex flex-row gap-3 justify-center">
				<input
					className="h-14 rounded-xl font-semibold placeholder:pl-4 pl-4 w-7/12 border-orange-100 drop-shadow-lg"
					value={search}
					onChange={(e) => {
						setSearch(e.target.value.toLowerCase());
						if (search.length >= 2) handleSearch();
					}}
					type="text"
					placeholder="Search ..."
				/>
				<div className="drop-shadow-lg">
				<Button
					text={"Search"}
					height={"h-14"}
					width={"w-auto"}
					onClick={() => handleSearch()}
				/>
				</div>
			</div>
		</div>
	);
};

export default SearchExercises;
