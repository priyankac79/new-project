const Header = (props) => {
	return (
		<div className="m-4 md:m-20">
			<h1 className="text-3xl font-bold">{props.title}</h1>
		</div>
	);
};

export default Header;
