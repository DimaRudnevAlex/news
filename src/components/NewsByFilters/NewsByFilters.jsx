import React from 'react';
import cl from "./styles.module.css"
import Pagination from "../Pagination/Pagination.jsx";
import {TOTAL_PAGES} from "../../constant/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";

const NewsByFilters = ({filters, changeFilters, isLoading, news}) => {
	const {data: dataCategories} = useFetch(getCategories)

	const handlePageChange = (page) => {
		changeFilters("page_number", page);
	}
	const handleNextPage = () => {
		if (filters.page_number < TOTAL_PAGES) {
			changeFilters("page_number", filters.page_number + 1);
			return;
		}
		changeFilters("page_number", 1);
	}
	const handlePreviousPage = () => {
		if (filters.page_number > 1) {
			changeFilters("page_number", filters.page_number - 1);
			return;
		}
		changeFilters("page_number", TOTAL_PAGES);
	}

	return (
		<section className={cl.section}>
			<NewsFilters filters={filters} changeFilters={changeFilters}/>
			<Pagination totalPages={TOTAL_PAGES}
			            handlePageChange={handlePageChange}
			            handlePreviousPage={handlePreviousPage}
			            handleNextPage={handleNextPage}
			            currentPage={filters.page_number}/>
			<NewsList isLoading={isLoading}
			          news={news}/>
		</section>
	);
};

export default NewsByFilters;