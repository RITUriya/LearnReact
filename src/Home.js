import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
	const {
		data: blogs,
		isload,
		error,
	} = useFetch("http://localhost:1234/blogs");

	return (
		<div className="home">
			{error && <div>{error}</div>}
			{isload && <div>Loading...</div>}
			{blogs && <Bloglist blogs={blogs} title="hum dum" />}
		</div>
	);
};

export default Home;
