import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
	const [title, settitle] = useState("");
	const [body, setbody] = useState("");
	const [author, setAuthor] = useState("mario");
	const [ispending, setispending] = useState(false);
	const navigate = useNavigate();

	const handlesubmit = (e) => {
		e.preventDefault();
		const blog = { title, body, author };
		//	console.log(blog);
		setispending(true);
		fetch("http://localhost:1234/blogs", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(blog),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
		setispending(false);
		navigate("/");
	};

	return (
		<div className="create">
			<h2>Create a New Blog</h2>
			<form onSubmit={handlesubmit}>
				<label>Blog title:</label>
				<input
					type="text"
					required
					value={title}
					onChange={(e) => settitle(e.target.value)}
				/>
				<label>Blog body:</label>
				<textarea
					required
					value={body}
					onChange={(e) => setbody(e.target.value)}></textarea>
				<label>Blog author:</label>
				<select
					value={author}
					onChange={(e) => {
						setAuthor(e.target.value);
					}}>
					<option value="mario">mario</option>
					<option value="yoshi">yoshi</option>
				</select>

				{!ispending && <button>Add blog</button>}
				{ispending && <button disabled>Adding blog.....</button>}
			</form>
		</div>
	);
};

export default Create;
