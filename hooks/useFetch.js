import { useState, useEffect } from "react";
import { usePageLoader } from "../contexts/page-loader.context.jsx";

import axios from "axios";
import { timeout } from "../utils";
import { BASE_URL, DELAY } from "../constants";

axios.defaults.baseURL = BASE_URL;

const useFetch = ({ url, onSuccess, onError, loader = true, delay = 100 }) => {
	const { setShowLoader } = usePageLoader();
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (!url) return;

		const fetchApi = async () => {
			loader && setShowLoader(true);
			setLoading(true);
			setError(null);

			try {
				// Delay the request to load the spinner
				DELAY && (await timeout(delay));

				const { data: response } = await axios.request({ url });

				onSuccess && onSuccess(response);
				setData(response);
			} catch ({ message }) {
				setError(message);
				onError && onError(message);
			} finally {
				setLoading(false);
				loader && setShowLoader(false);
			}
		};
		fetchApi();
	}, [url]);

	return { loading, data, error };
};
export default useFetch;
