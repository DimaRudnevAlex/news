export interface INews {
    author: string;
    category: CategoryType[];
    description: string;
    id: string;
    image: string;
    language: string;
    published: string;
    title: string;
    url: string;
}

export interface NewsApiResponse {
    news: INews[];
    page: number;
    status: string
}
export interface CategoriesApiResponse {
    categories: CategoryType[];
    description: string;
    status: string
}

export interface IFilters {
    page_number: number;
    page_size: number;
    category: CategoryType | null;
    keywords: string;
}
export interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
    handleNextPage: () => void;
    handlePreviousPage: () => void;
}

export type ParamsType = Partial<IFilters>;

export type CategoryType = string;

export type SkeletonType = "banner" | "item"
export type DirectionType = "row" | "column"









