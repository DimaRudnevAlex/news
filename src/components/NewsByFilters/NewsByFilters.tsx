import cl from "./styles.module.css"
import {TOTAL_PAGES} from "../../constant/constants.ts";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import {useGetNewsQuery} from "../../store/services/newsApi.ts";
import {useAppDispatch, useAppSelector} from "../../store";
import {setFilters} from "../../store/slices/newsSlice.ts";


const NewsByFilters = () => {

    const filters = useAppSelector(state => state.news.filters)
    const news = useAppSelector(state => state.news.news)
    const dispatch = useAppDispatch()

    const debounceValue = useDebounce(filters.keywords, 1000)

    const { isLoading } = useGetNewsQuery({
            ...filters,
            keywords: debounceValue,
    })


    const handlePageChange = (page: number) => {
        dispatch(setFilters({key: "page_number", value: page}));
    }
    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({key: "page_number", value: filters.page_number + 1}));
            return;
        }
        dispatch(setFilters({key: "page_number", value: 1}));
    }
    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({key: "page_number", value: filters.page_number - 1}));
            return;
        }
        dispatch(setFilters({key: "page_number", value: TOTAL_PAGES}));
    }

    return (
        <section className={cl.section}>
            <NewsFilters filters={filters}
            />

            <PaginationWrapper top
                               bottom
                               totalPages={TOTAL_PAGES}
                               handlePageChange={handlePageChange}
                               handlePreviousPage={handlePreviousPage}
                               handleNextPage={handleNextPage}
                               currentPage={filters.page_number}
                               >

                <NewsList isLoading={isLoading}
                          news={news}/>
            </PaginationWrapper>
        </section>
    );
};

export default NewsByFilters;