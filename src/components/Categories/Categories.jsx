import {forwardRef} from 'react';
import cl from "./styles.module.css"

const Categories = forwardRef(({categories, selectCategory, setSelectCategory}, ref) => {
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