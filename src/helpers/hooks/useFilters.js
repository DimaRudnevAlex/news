import {useState} from "react";
import {PAGE_SIZE} from "../../constant/constants.js";

export const useFilters = (initialFilters) => {
	const [filters, setFilters] = useState(initialFilters)
	const changeFilters = (key, value) => {
		setFilters(prev => ({...prev, [key]: value}))
	}
	return {filters, changeFilters}
}