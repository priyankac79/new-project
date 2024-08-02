import React from "react";
import emptyCart from "../assets/images/illustration-empty-cart.svg";

const Cart = () => {
	return (
		<div className="px-6 py-4 bg-white rounded-md h-60">
			<h1 className="font-bold text-orange-600">Your Cart (0)</h1>
			<div className="flex flex-col items-center justify-center px-12 py-4">
				<img src={emptyCart} alt="Empty Cart" />
			<p className="my-2 text-xs text-rose-950">Your added items will appear here</p>
			</div>
		</div>
	);
};

export default Cart;			
