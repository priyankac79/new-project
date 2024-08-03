// import Icon from "../assets/images/icon-add-to-cart.svg";
// import Increment from "../assets/images/icon-increment-quantity.svg";
// import Decrement from "../assets/images/icon-decrement-quantity.svg";
// import { useState } from "react";

// const Item = ({ id, img, category, name, price }) => {
// 	const [count, setCount] = useState(0);
// 	const [isInCart, setIsInCart] = useState(false);
// 	const [newCart, setNewCart] = useState([]);

// 	const increment = () => {
// 		setCount(count + 1);
// 	};

// 	const decrement = () => {
// 		if (count > 1) {
// 			setCount(count - 1);
// 		} else {
// 			setCount(0);
// 			setIsInCart(false);
// 		}
// 	};

// 	const addToCart = (id) => {
// 		console.log(id);
// 		console.log(name);
// 		setIsInCart(true);
// 		setCount(1);
// 		setNewCart([
// 			...newCart,
//             id
// 		])
// 		console.log(newCart);
// 	};

// 	return (
// 		<div className="mt-6 md:w-52">
// 			<img src={img} alt={name} className="rounded-lg md:h-48" />
// 			{isInCart ? (
// 				<div className="flex justify-center -mt-6">
// 					<div className="flex px-2 py-2 bg-orange-700 border-orange-700 rounded-full">
// 						<button>
// 							<img
// 								src={Decrement}
// 								alt="Decrement"
// 								className="px-1 py-2 border border-white rounded-full"
// 								onClick={decrement}
// 							/>
// 						</button>
// 						<p className="text-white mx-9">{count}</p>
// 						<button>
// 							<img
// 								src={Increment}
// 								alt="Increment"
// 								className="p-1 border border-white rounded-full"
// 								onClick={increment}
// 							/>
// 						</button>
// 					</div>
// 				</div>
// 			) : (
// 				<div className="flex justify-center -mt-6">
// 					<button
// 						className="flex items-center justify-center px-6 py-2 bg-white border rounded-full border-orange-950"
// 						onClick={addToCart}
// 					>
// 						<img src={Icon} alt="Add to Cart Icon" className="w-5 h-5" />
// 						<h2 className="ml-2 text-xs font-semibold">Add to Cart</h2>
// 					</button>
// 				</div>
// 			)}
// 			<div className="my-4 leading-6">
// 				<h4 className="text-sm text-gray-400">{category}</h4>
// 				<h3 className="font-semibold">{name}</h3>
// 				<p className="font-bold text-orange-600">${price}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default Item;

import Icon from "../assets/images/icon-add-to-cart.svg";
import Increment from "../assets/images/icon-increment-quantity.svg";
import Decrement from "../assets/images/icon-decrement-quantity.svg";
import { useState } from "react";

const Item = ({ id, img, category, name, price }) => {
	const [count, setCount] = useState(0);
	const [isInCart, setIsInCart] = useState(false);
	const [newCart, setNewCart] = useState([]);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		if (count > 1) {
			setCount(count - 1);
		} else {
			setCount(0);
			setIsInCart(false);
		}
	};

	const addToCart = () => {
		const item = { id, name, category, price, count: 1, img };
		setIsInCart(true);
		setCount(1);
		setNewCart((prevCart) => [...prevCart, item]);
		console.log(item);
		console.log(newCart); // This will show the cart state before the update due to state batching
	};

	return (
		<div className="mt-6 md:w-52">
			<img src={img} alt={name} className="rounded-lg md:h-48" />
			{isInCart ? (
				<div className="flex justify-center -mt-6">
					<div className="flex px-2 py-2 bg-orange-700 border-orange-700 rounded-full">
						<button onClick={decrement}>
							<img
								src={Decrement}
								alt="Decrement"
								className="px-1 py-2 border border-white rounded-full"
							/>
						</button>
						<p className="text-white mx-9">{count}</p>
						<button onClick={increment}>
							<img
								src={Increment}
								alt="Increment"
								className="p-1 border border-white rounded-full"
							/>
						</button>
					</div>
				</div>
			) : (
				<div className="flex justify-center -mt-6">
					<button
						className="flex items-center justify-center px-6 py-2 bg-white border rounded-full border-orange-950"
						onClick={addToCart}
					>
						<img src={Icon} alt="Add to Cart Icon" className="w-5 h-5" />
						<h2 className="ml-2 text-xs font-semibold">Add to Cart</h2>
					</button>
				</div>
			)}
			<div className="my-4 leading-6">
				<h4 className="text-sm text-gray-400">{category}</h4>
				<h3 className="font-semibold">{name}</h3>
				<p className="font-bold text-orange-600">${price}</p>
			</div>
		</div>
	);
};

export default Item;
