import Header from "./components/Header";
import Item from "./components/Item";
import Cart from "./components/Cart";
import allItems from "./data.json";

function App() {
	return (
		<div className="justify-between m-4 md:m-20 md:flex">
			<div className="md:w-[68%]">
				<Header title="Desserts" />
				<div className="md:grid-cols-3 md:grid">
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
