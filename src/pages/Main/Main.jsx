import NewsList from "../../components/NewsList/NewsList.jsx";
import Banner from "../../components/Banner/Banner.jsx";

import cl from "./styles.module.css"
import {getCategories, getNews} from "../../api/apiNews.js";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Categories from "../../components/Categories/Categories.jsx";
import Search from "../../components/Search/Search.jsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE, TOTAL_PAGES} from "../../constant/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";


const Main = () => {
	const {filters, changeFilters} = useFilters({
		page_number: 1,
		page_size: PAGE_SIZE,
		category: "All",
		keywords: "",
	})

	const debounceValue = useDebounce(filters.keywords, 1000)

	const {data, isLoading} = useFetch(getNews, {
		...filters,
		keywords: debounceValue,
	});
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
		<main className={cl.main}>
			<Search keywords={filters.keywords}
			        setKeywords={changeFilters}/>
			{dataCategories && <Categories categories={["All", ...dataCategories.categories]}
			                               selectCategory={filters.category}
			                               setSelectCategory={changeFilters}/>}
			<Banner isLoading={isLoading}
			        item={data && data.news && data.news[0]}/>
			<Pagination totalPages={TOTAL_PAGES}
			            handlePageChange={handlePageChange}
			            handlePreviousPage={handlePreviousPage}
			            handleNextPage={handleNextPage}
			            currentPage={filters.page_number}/>
			<NewsList isLoading={isLoading}
			          news={data?.news}/>
		</main>
	);
};

export default Main;