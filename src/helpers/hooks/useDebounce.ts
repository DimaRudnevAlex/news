import {useEffect, useState} from "react";

export const useDebounce = (value: string, delay: number): string => {
	const [debounceValue, setDebounceValue] = useState(value)
	useEffect(() => {
		const timer = setTimeout(() => {
			setDebounceValue(value)
		}, delay)
		return () => clearTimeout(timer)
	},[value, delay])
	return debounceValue;
}