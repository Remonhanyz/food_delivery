import React, {useEffect, useState} from "react";
import {CartItem} from "../components";
import {useStateValue} from "../context/StateProvider";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import {actionType} from "../context/reducer";
import "react-phone-input-2/lib/style.css";
import { isValidPhoneNumber } from 'react-phone-number-input'

const OrderNow = () => {
	const initialValues = { address: "", email: "", phone: ""};
  const [formValues, setFormValues] = useState(initialValues);
//   const [phone, setPhone] = useState('0');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
	const [{products, cartItems}, dispatch] = useStateValue();
	const [tot, setTot] = useState(0);
	const [next, setNext] = useState(false);


const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const handlePhone = (value) => {
	console.log('+'+value.toString())
    setFormValues({ ...formValues, phone: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.address) {
      errors.address = "Required";
    }
    if (!values.email) {
      errors.email = "Required!";
    } else if (!regex.test(values.email)) {
      errors.email = "not a valid email!";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    } 
	else if (!isValidPhoneNumber("+" + formValues.phone.toString())) {
		errors.phone = "Not a valid number";
	} 
	// else if (values.password.length > 10) {
    //   errors.password = "Password cannot exceed more than 10 characters";
    // }
    return errors;
  };

	const clearCart = () => {
		dispatch({
			type: actionType.SET_CARTITEMS,
			cartItems: []
		});

		localStorage.setItem("cartItems", JSON.stringify([]));
	};

	useEffect(() => {
		let totalPrice = cartItems.reduce(function (accumulator, item) {
			return accumulator + item.qty * item.price;
		}, 0);
		setTot(totalPrice);
	}, [tot]);

	return (
		<>
			<div className="w-full mb-8 font-bold lg:text-[3.5rem] text-[2.5rem] text-center tracking-wide text-headingColor">
				Check Out
			</div>

			<div className="w-full flex items-center justify-center min-h-[75vh]">
				<div className="w-[90%] md:w-[90%] container border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
					{!next ? (
						<>
							{" "}
							<div className="bg-cartBg w-full h-full rounded-[2rem] flex flex-col justify-center items-center">
								<div className="w-full md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll no-scrollbar flex flex-col justify-center items-center">
									{/* cart item */}
									{cartItems &&
										cartItems.map((product) => (
											<CartItem
												product={product}
												isDetails={true}
												setTot={setTot}
											/>
										))}
									{/* cart total section */}
									<div className="w-full flex-1 bg-cartTotal gap-2 py-4 rounded-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
										<div className="w-full flex items-center justify-between">
											<p className="text-gray-400 text-lg">
												Sub Total
											</p>
											<p className="text-gray-400 text-lg">
												$ {tot}
											</p>
										</div>
										<div className="w-full flex items-center justify-between">
											<p className="text-gray-400 text-lg">
												Delivery
											</p>
											<p className="text-gray-400 text-lg">$ 2.5</p>
										</div>

										<div className="w-full border-b border-gray-600 my-2"></div>

										<div className="w-full flex items-center justify-between">
											<p className="text-gray-200 text-xl font-semibold">
												Total
											</p>
											<p className="text-gray-200 text-xl font-semibold">
												${tot + 2.5}
											</p>
										</div>
									</div>
								</div>
							</div>
							<Button
								text="Next"
								width="md:w-[20%] w-[90%]  h-12 ml-auto"
								onClick={() => setNext(true)}
							/>
						</>
					) : (
						<div className="w-full flex items-center justify-center min-h-[75vh]">
								{Object.keys(formErrors).length === 0 &&
									isSubmit &&
									window.location.assign(`/success`)}
							<form
								onSubmit={handleSubmit}
								className="w-[90%] md:w-[75%] border border-gray-200 rounded-lg p-8 flex flex-col items-center justify-start gap-4"
							>
								<div className="w-full flex md:flex-row flex-col items-center">
									<label htmlFor="address">Address:</label>
									<input
										className="ml-6 h-8 rounded-xl font-semibold placeholder:pl-4 pl-4 md:w-7/12 border-orange-100 drop-shadow-lg w-full"
										id="address"
										name="address"
										type="text"
										onChange={handleChange}
										value={formValues.address}
									/>
									<p
										id="standard_error_help"
										class="ml-6 mt-2 text-xs text-red-600 dark:text-red-400 flex align-center"
									>
										{formErrors.address}
									</p>
								</div>
								<div className="w-full flex md:flex-row flex-col items-center">
									<label htmlFor="email">Email:</label>
									<input
										className="ml-6 h-8 rounded-xl font-semibold placeholder:pl-4 pl-4 w-full md:w-7/12 border-orange-100 drop-shadow-lg"
										id="email"
										name="email"
										type="email"
										onChange={handleChange}
										value={formValues.email}
									/>
									<p
										id="standard_error_help"
										class="ml-6 mt-2 text-xs text-red-600 dark:text-red-400 flex align-center"
									>
										{formErrors.email}
									</p>
								</div>
								<div className="w-full flex md:flex-row flex-col items-center">
									<label htmlFor="phone">Phone:</label>

									<PhoneInput
										className="ml-6 drop-shadow-lg"
										value={formValues.phone}
										onChange={(value) => handlePhone(value)}
										country={"eg"}
										inputProps={{
											name: "phone",
											required: true
										}}
									/>
{formErrors.phone}								</div>
								<div className="md:w-[20%] w-[90%] ml-auto">
									{/* <Link to="/success" onClick={clearCart}> */}
									<Button
										text="Submit"
										width="w-full h-12"
										className="ml-auto"
									/>
									{/* </Link> */}
								</div>
							</form>
						</div>
					)}
				</div>
			</div>
		</>
	);
};
export default OrderNow;
