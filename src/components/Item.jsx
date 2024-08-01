import Icon from "../assets/images/icon-add-to-cart.svg";
import Increment from "../assets/images/icon-increment-quantity.svg";
import Decrement from "../assets/images/icon-decrement-quantity.svg";

const Item = ({ img, category, name, price, showCartButton }) => {
	return (
		<div className="my-6 md:w-52">
			<img src={img} alt={name} className="rounded-lg md:h-48" />
			{showCartButton ? (
				<div className="flex justify-center -mt-6">
					<button className="flex items-center justify-center px-6 py-2 bg-white border rounded-full border-orange-950">
						<img src={Icon} alt="Add to Cart Icon" className="w-5 h-5" />
						<h2 className="ml-2 text-xs font-semibold">Add to Cart</h2>
					</button>
				</div>
			) : (
				<div className="flex justify-center -mt-6">
					<button className="flex px-2 py-2 bg-orange-700 border-orange-700 rounded-full">
						<button>
							<img
								src={Decrement}
								alt="Decrement"
								className="px-1 py-2 border border-white rounded-full"
							/>
						</button>
						<p className="text-white mx-9">4</p>
						<button>
							<img
								src={Increment}
								alt="Increment"
								className="p-1 border border-white rounded-full"
							/>
						</button>
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
