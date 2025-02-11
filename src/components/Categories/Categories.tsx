import {ForwardedRef, forwardRef} from 'react';
import cl from "./styles.module.css"
import {CategoryType} from "../../interfaces";
import {useAppDispatch} from "../../store";
import {setFilters} from "../../store/slices/newsSlice.ts";

interface Props {
    categories: CategoryType[];
    selectCategory: CategoryType | null;

}

const Categories= forwardRef(({
                                              categories,
                                              selectCategory,
                                          }: Props, ref: ForwardedRef<HTMLDivElement>) => {

    const dispatch = useAppDispatch()

    return (
        <div ref={ref}
             className={cl.categories}>
            {categories.map(category => (
                <button onClick={() => dispatch(setFilters({key: "category", value: category}))}
                        key={category}
                        className={selectCategory === category ? cl.active : cl.item}>{category}</button>))}
        </div>
    );
})
Categories.displayName = "Categories"
export default Categories;