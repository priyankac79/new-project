import Header from "./components/Header";
import Item from "./components/Item";
import Item_1 from "./assets/images/image-tiramisu-mobile.jpg";

function App() {
	return (
		<div className="m-4 md:m-20">
			<Header title="Desserts" />
			<Item
				img={Item_1}
				category="Tiramisu"
				name="Classic Tiramisu"
				price="5.50"
			/>
		</div>
	);
}

export default App;
