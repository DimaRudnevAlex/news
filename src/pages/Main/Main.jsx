import cl from "./styles.module.css"
import {getNews} from "../../api/apiNews.js";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE} from "../../constant/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import LatestNews from "../../components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.jsx";


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

	return (
		<main className={cl.main}>
			<LatestNews isLoading={isLoading}
			            banners={data && data.news}/>
			<NewsByFilters news={data?.news}
			               isLoading={isLoading}
			               filters={filters}
			               changeFilters={changeFilters}/>
		</main>
	);
};

export default Main;