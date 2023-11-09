import { Link } from "react-router-dom";

const Notfound = () => {
	return (
		<div>
			<h2>Sorry</h2>
			<p>That page can not be found</p>
			<Link to="/">Back to Home</Link>
		</div>
	);
};
export default Notfound;
