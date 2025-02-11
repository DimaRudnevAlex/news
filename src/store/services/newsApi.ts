import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {CategoriesApiResponse, NewsApiResponse, ParamsType} from "../../interfaces";
import {setNews} from "../slices/newsSlice.ts";


const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        getNews: builder.query<NewsApiResponse, ParamsType>({
            keepUnusedDataFor: 0,
            query: (params) => {
                const {page_number = 1, page_size = 10, category, keywords} = params || {}
                return {
                    url: "search",
                    params: {
                        apiKey: API_KEY,
                        page_number,
                        page_size,
                        category,
                        keywords,
                    }
                }
            },
            async onQueryStarted(_arg, {dispatch, queryFulfilled}) {
                const {data} = await queryFulfilled;
                dispatch(setNews(data.news));
            }
        }),
        getLatestNews: builder.query<NewsApiResponse, null>({
            query: () => {
                return {
                    url: "latest-news",
                    params: {
                        apiKey: API_KEY,
                    }
                }
            },
        }),
        getCategories: builder.query<CategoriesApiResponse, null>({
            query: () => {
                return {
                    url: "available/categories",
                    params: {
                        apiKey: API_KEY,
                    }
                }
            },
        }),
    }),
})


export const {useGetNewsQuery, useGetLatestNewsQuery, useGetCategoriesQuery} = newsApi