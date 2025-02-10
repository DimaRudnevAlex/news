import React from 'react';
import cl from "./styles.module.css"
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import Slider from "../Slider/Slider.jsx";

const NewsFilters = ({filters, changeFilters}) => {
	const {data: dataCategories} = useFetch(getCategories)

	return (
		<div className={cl.filters}>
			{dataCategories && <Slider><Categories categories={["All", ...dataCategories.categories]}
			                                       selectCategory={filters.category}
			                                       setSelectCategory={changeFilters}/></Slider>}
			<Search keywords={filters.keywords}
			        setKeywords={changeFilters}/>
		</div>
	);
};

export default NewsFilters;