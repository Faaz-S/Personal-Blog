import * as React from "react";

interface Props {
	children: React.ReactNode;
}

const CustomButton = ({ children }: Props) => {
	return (
		<button className="bg-red-700 text-white shadow-lg shadow-red-400 rounded-md px-4 py-2 hover:shadow-xl hover:shadow-gray-500 hover:bg-black duration-100">
			{children}
		</button>
	);
};

export default CustomButton;
