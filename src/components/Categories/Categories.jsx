import React from 'react';
import cl from "./styles.module.css"

const Categories = ({categories, selectCategory, setSelectCategory}) => {
	return (
		<div className={cl.categories}>
			{categories.map(category => (<button onClick={() => setSelectCategory(category)}
			                                     key={category}
			                                     className={selectCategory === category ? cl.active : cl.item}>{category}</button>))}
		</div>
	);
};

export default Categories;