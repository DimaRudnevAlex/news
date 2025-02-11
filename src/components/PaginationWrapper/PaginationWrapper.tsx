import Pagination from "../Pagination/Pagination.tsx";
import {FC, ReactNode} from "react";
import {IPaginationProps} from "../../interfaces";

interface Props {
    top?: boolean,
    bottom?: boolean,
    children: ReactNode,
}


const PaginationWrapper: FC<Props & IPaginationProps> = ({top, bottom, children, ...paginationProps}) => {
    return (
        <>
            {top && <Pagination {...paginationProps} />}
            {children}
            {bottom && <Pagination {...paginationProps} />}
        </>
    );
};

export default PaginationWrapper;