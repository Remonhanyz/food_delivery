import React from "react";

const Button = ({text, height = "", width = "w-full md:w-auto", onClick = () => {}}) => {
	return (
		<button
			className = {`bg-gradient-to-br from-orange-400 to-orange-500 ${width} px-4 py-2 text-white ${height} rounded-xl hover:shadow-lg transition-all ease-in-ease-out`}
			type="button"
            onClick={() => onClick()}
		>
			{text}
		</button>
	);
};

export default Button;
