import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
	return (
		<div className="blog-list">
			<h2>{title}</h2>
			{blogs.map((e) => (
				<div className="blogs-preview" key={e.id}>
					<Link to={`/blogs/${e.id}`}>
						<h4>{e.title}</h4>
						<p>{e.author}</p>
					</Link>
				</div>
			))}
		</div>
	);
};

export default Bloglist;
