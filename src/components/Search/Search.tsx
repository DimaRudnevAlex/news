import cl from "./styles.module.css"
import {FC} from "react";
import {useTheme} from "../../context/ThemeContext.tsx";
import {useAppDispatch} from "../../store";
import {setFilters} from "../../store/slices/newsSlice.ts";

interface Props {
    keywords: string;
}

const Search: FC<Props> = ({keywords}) => {
    const {isDark} = useTheme();

    const dispatch = useAppDispatch()

    return (
        <div className={`${cl.search} ${isDark ? cl.dark : cl.light}`}>
            <input type="text"
                   placeholder="Search"
                   className={cl.input}
                   value={keywords}
                   onChange={(e) => dispatch(setFilters({key: "keywords", value: e.target.value}))}/>
        </div>
    );
};

export default Search;