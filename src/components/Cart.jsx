import React from "react";
import emptyCart from "../assets/images/illustration-empty-cart.svg";
import closeIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";

const Cart = ({ newCart, setNewCart }) => {
	const removeItem = (id) => {
		const updateCart = newCart.filter((item) => item.id !== id);
		setNewCart(updateCart);
	};

	const getTotalPrice = () => {
		return newCart
			.reduce((total, item) => total + item.price * item.count, 0)
			.toFixed(2);
	};

	return (
		<div
			className={`px-6 py-4 bg-white rounded-md ${
				newCart.length === 0 ? "sm:h-60" : "sm:min-h-60 sm:max-h-screen"
			} sm:w-96`}
		>
			<h1 className="font-bold text-orange-600">
				Your Cart ({newCart.length})
			</h1>
			{newCart.length === 0 ? (
				<div className="flex flex-col items-center justify-center px-4 py-4">
					<img src={emptyCart} alt="Empty Cart" />
					<p className="my-2 text-xs text-rose-950">
						Your added items will appear here
					</p>
				</div>
			) : (
				<>
					{newCart.map((item, index) => (
						<div key={item.id}>
							<div className="flex justify-between py-4">
								<div>
									<h1 className="text-sm font-semibold text-rose-950">
										{item.name}
									</h1>
									<h3 className="py-1 text-sm font-semibold text-orange-600">
										{item.count}x
										<span className="px-2 text-gray-400">
											@ ${item.price}{" "}
											<span className="ml-1 font-normal text-amber-950">
												${(item.price * item.count).toFixed(2)}
											</span>
										</span>
									</h3>
								</div>
								<button onClick={() => removeItem(item.id)}>
									<img
										src={closeIcon}
										alt="Close Icon"
										className="p-[0.15rem] border border-gray-300 rounded-full"
									/>
								</button>
							</div>
							{index < newCart.length - 1 && <hr />}
						</div>
					))}
					<hr />
					<div className="flex items-center justify-between py-4">
						<h4 className="text-sm text-amber-950">Order Total</h4>
						<span className="text-2xl font-bold text-right text-rose-950">
							${getTotalPrice()}
						</span>
					</div>
					<div className="flex justify-center py-4 rounded-md bg-rose-50">
						<img src={carbonIcon} alt="Carbon Icon" />
						<p className="ml-2 text-sm text-amber-950">
							This is a{" "}
							<span className="font-semibold text-rose-950">
								carbon-neutral
							</span>{" "}
							delivery
						</p>
					</div>
					<div className="flex justify-center my-6 text-white bg-orange-700 rounded-full">
						<button className="py-3">Confirm Order</button>
					</div>
				</>
			)}
		</div>
	);
};

export default Cart;
