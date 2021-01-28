import { useEffect, useState } from 'react';

export function useData() {
	let [labels, setLabels] = useState([]);
	let [values, setValues] = useState([]);

	useEffect(() => {
		setValues([1000, 10_000, 500, 1000, 1000, 1000, 8000]);
		setLabels(['January', 'February', 'March', 'April', 'May', 'June', 'July']);
	}, []);

	return { labels, values };
}
