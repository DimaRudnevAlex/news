import React from 'react';
import cl from "./styles.module.css"
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";

const NewsFilters = ({filters, changeFilters}) => {
	const {data: dataCategories} = useFetch(getCategories)

	return (
		<div className={cl.filters}>
			{dataCategories && <Categories categories={["All", ...dataCategories.categories]}
			                               selectCategory={filters.category}
			                               setSelectCategory={changeFilters}/>}
			<Search keywords={filters.keywords}
			        setKeywords={changeFilters}/>
		</div>
	);
};

export default NewsFilters;