import cl from "./styles.module.css"
import {FC} from "react";
import {useTheme} from "../../context/ThemeContext.tsx";

interface Props {
    keywords: string;
    setKeywords: (key: string, value: string | number | null) => void;
}

const Search: FC<Props> = ({keywords, setKeywords}) => {
    const {isDark} = useTheme();
    return (
        <div className={`${cl.search} ${isDark ? cl.dark : cl.light}`}>
            <input type="text"
                   placeholder="Search"
                   className={cl.input}
                   value={keywords}
                   onChange={(e) => setKeywords("keywords", e.target.value)}/>
        </div>
    );
};

export default Search;