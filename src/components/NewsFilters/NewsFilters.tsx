import cl from "./styles.module.css"
import Categories from "../Categories/Categories.tsx";
import Search from "../Search/Search.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getCategories} from "../../api/apiNews.ts";
import Slider from "../Slider/Slider.tsx";
import {CategoriesApiResponse, IFilters} from "../../interfaces";
import {FC} from "react";

interface Props {
    filters: IFilters;
    changeFilters: (key: string, value: string | number | null) => void;
}

const NewsFilters: FC<Props> = ({filters, changeFilters}) => {
    const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories)

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