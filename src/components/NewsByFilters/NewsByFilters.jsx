
import cl from "./styles.module.css"
import {PAGE_SIZE, TOTAL_PAGES} from "../../constant/constants.js";
import NewsList from "../NewsList/NewsList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getNews} from "../../api/apiNews.js";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.jsx";

const NewsByFilters = () => {
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
			<NewsFilters filters={filters}
			             changeFilters={changeFilters}/>

			<PaginationWrapper top
			                   bottom
			                   totalPages={TOTAL_PAGES}
			                   handlePageChange={handlePageChange}
			                   handlePreviousPage={handlePreviousPage}
			                   handleNextPage={handleNextPage}
			                   currentPage={filters.page_number}>
				<NewsList isLoading={isLoading}
				          news={data?.news}/>
			</PaginationWrapper>
		</section>
	);
};

export default NewsByFilters;