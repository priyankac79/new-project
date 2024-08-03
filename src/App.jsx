import Header from "./components/Header";
import Item from "./components/Item";
import Cart from "./components/Cart";
import allItems from "./data.json";

function App() {
	return (
		<div className="justify-between m-4 lg:my-20 lg:mx-32 md:m-6 md:flex">
			<div className="">
				<Header title="Desserts" />
				<div className="grid grid-cols-2 gap-2 lg:grid-cols-3 md:gap-6">
					{allItems.map((item) => (
						<Item
							key={item.id}
							id={item.id}
							img={item.image.mobile}	
							category={item.category}
							name={item.name}	
							price={item.price.toFixed(2)}	
						/>
					))}
				</div>
			</div>
			<Cart />
		</div>		
	);
}

export default App;
