import Header from "./components/Header";
import Item from "./components/Item";
import Item_1 from "./assets/images/image-waffle-mobile.jpg";
import Item_2 from "./assets/images/image-creme-brulee-mobile.jpg";
import Item_3 from "./assets/images/image-macaron-mobile.jpg";
import Item_4 from "./assets/images/image-tiramisu-mobile.jpg";
import Item_5 from "./assets/images/image-baklava-mobile.jpg";
import Item_6 from "./assets/images/image-meringue-mobile.jpg";
import Item_7 from "./assets/images/image-cake-mobile.jpg";
import Item_8 from "./assets/images/image-brownie-mobile.jpg";
import Item_9 from "./assets/images/image-panna-cotta-mobile.jpg";

function App() {
	return (
		<div className="m-4 md:m-20">
			<Header title="Desserts" />
			<div className="md:grid-cols-3 md:w-[60%] md:grid">
				<Item
					img={Item_1}
					category="Waffle"
					name="Waffle with Berries"
					price="6.50"
				/>
				<Item
					img={Item_2}
					category="Creme Brulee"
					name="Vanilla Bean Creme Brulee"
					price="7.00"
				/>
				<Item
					img={Item_3}
					category="Macaron"
					name="Macaron Mix of Five"
					price="8.00"
				/>
				<Item
					img={Item_4}
					category="Tiramisu"
					name="Classic Tiramisu"
					price="5.50"
				/>
				<Item
					img={Item_5}
					category="Baklava"
					name="Pistachio Baklava"
					price="4.00"
				/>
				<Item
					img={Item_6}
					category="Pie"
					name="Lemon Meringue Pie"
					price="5.00"
				/>
				<Item
					img={Item_7}
					category="Cake"
					name="Red Velvet Cake"
					price="4.50"
				/>
				<Item
					img={Item_8}
					category="Brownie"
					name="Salted Caramel Brownie"
					price="5.50"
				/>
				<Item
					img={Item_9}
					category="Panna Cotta"
					name="Vanilla Panna Cotta"
					price="6.50"
				/>
			</div>
		</div>
	);
}

export default App;
