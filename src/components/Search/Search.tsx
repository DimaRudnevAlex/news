import cl from "./styles.module.css"
import {FC} from "react";

interface Props {
	keywords: string;
	setKeywords: (key: string, value: string | number | null) => void
}

const Search: FC<Props>= ({keywords, setKeywords}) => {

	return (
		<div className={cl.search}>
			<input type="text"
			       placeholder="Search"
			       className={cl.input}
			       value={keywords}
			       onChange={(e) => setKeywords("keywords", e.target.value)}/>
		</div>
	);
};

export default Search;