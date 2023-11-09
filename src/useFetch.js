import { cleanup } from "@testing-library/react";
import { useEffect, useState } from "react";

const useFetch = (url) => {
	//	const abortCont = new AbortController();

	const [data, setData] = useState(null);
	const [isload, setIsLoad] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		setTimeout(() => {
			fetch(url)
				.then((res) => {
					console.log(res);
					if (res.ok) {
						return res.json();
					} else {
						throw Error("could not fetch data");
					}
				})
				.then((data) => {
					setData(data);
					setIsLoad(false);
					setError(null);
				})
				.catch((err) => {
					setError(err.message);
					setIsLoad(false);
				});
		}, 1000);
	}, [url]);

	return { data, isload, error };
};

export default useFetch;
