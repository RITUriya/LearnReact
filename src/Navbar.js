import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar">
			<h1>The Dojo Blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				{/* <a
					href="/create"
					style={{
						borderRadius: "8px",
						color: "white",
						backgroundColor: "red",
					}}> */}
				<Link to="/create">New Blog</Link>
			</div>
		</nav>
	);
};

export default Navbar;
