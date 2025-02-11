import cl from "./styles.module.css"
import Categories from "../Categories/Categories.tsx";
import Search from "../Search/Search.tsx";
import Slider from "../Slider/Slider.tsx";
import {IFilters} from "../../interfaces";
import {FC} from "react";
import {useGetCategoriesQuery} from "../../store/services/newsApi.ts";

interface Props {
    filters: IFilters;
}

const NewsFilters: FC<Props> = ({filters}) => {
    const {data} = useGetCategoriesQuery(null)


    return (
        <div className={cl.filters}>
            {data && <Slider><Categories categories={["All", ...data.categories]}
			                             selectCategory={filters.category}
			/></Slider>}
            <Search keywords={filters.keywords}/>
        </div>
    );
};

export default NewsFilters;