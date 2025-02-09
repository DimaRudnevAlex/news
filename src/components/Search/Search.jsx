import React from 'react';
import cl from "./styles.module.css"

const Search = ({keywords, setKeywords}) => {
	return (
		<div className={cl.search}>
			<input type="text"
			       placeholder="Search"
			       className={cl.input}
			       value={keywords}
			       onChange={(e) => setKeywords(e.target.value)}/>
		</div>
	);
};

export default Search;