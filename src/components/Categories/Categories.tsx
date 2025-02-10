import {ForwardedRef, forwardRef} from 'react';
import cl from "./styles.module.css"
import {CategoryType} from "../../interfaces";

interface Props {
    categories: CategoryType[];
    selectCategory: CategoryType | null;
    setSelectCategory: (key: string, value: string | number | null) => void

}

const Categories= forwardRef(({
                                              categories,
                                              selectCategory,
                                              setSelectCategory
                                          }: Props, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref}
             className={cl.categories}>
            {categories.map(category => (
                <button onClick={() => setSelectCategory("category", category === "All" ? null : category)}
                        key={category}
                        className={selectCategory === category ? cl.active : cl.item}>{category}</button>))}
        </div>
    );
})
Categories.displayName = "Categories"
export default Categories;