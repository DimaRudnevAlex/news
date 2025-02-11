import cl from "./styles.module.css"
import {FC} from "react";
import {IPaginationProps} from "../../interfaces";
import {useTheme} from "../../context/ThemeContext.tsx";

const Pagination: FC<IPaginationProps> = ({
                                              totalPages,
                                              handleNextPage,
                                              handlePreviousPage,
                                              handlePageChange,
                                              currentPage,
                                          }) => {
    const {isDark} = useTheme();

    return (
        <div className={`${cl.pagination} ${isDark ? cl.dark : cl.light}`}>
            <button className={cl.arrow}
                    onClick={handlePreviousPage}>{"<"}</button>
            <div className={cl.list}>
                {[...Array(totalPages)].map((_, i) => (
                    <button onClick={() => handlePageChange(i + 1)}
                            key={i}
                            disabled={i + 1 === currentPage}
                            className={cl.pageNumber}>{i + 1}</button>
                ))}
            </div>
            <button className={cl.arrow}
                    onClick={handleNextPage}>{">"}</button>
        </div>
    );
};

export default Pagination;