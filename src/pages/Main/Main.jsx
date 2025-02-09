import {useEffect, useState} from 'react';

import NewsList from "../../components/NewsList/NewsList.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

import cl from "./styles.module.css"
import {getNews} from "../../api/apiNews.js";
import Pagination from "../../components/Pagination/Pagination.jsx";


const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 10;
	const pageSize = 10;

	const fetchNews = async (currentPage) => {
		try {
			setIsLoading(true)
			const response = await getNews(currentPage, pageSize);
			setNews(response.news)
			setIsLoading(false)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		fetchNews(currentPage)
	}, [currentPage])

	const handlePageChange = (page) => {
		setCurrentPage(page);
	}
	const handleNextPage = () => {
		if (currentPage < totalPages) {
			setCurrentPage(prev => prev + 1)
			return;
		}
		setCurrentPage(1);
	}
	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(prev => prev - 1)
			return;
		}
		setCurrentPage(totalPages);
	}

	return (
		<main className={cl.main}>
			{news.length > 0 && !isLoading ? <Banner item={news[1]}/> : <Skeleton type={"banner"}
			                                                                      count={1}/>}
			<Pagination totalPages={totalPages}
			            handlePageChange={handlePageChange}
			            handlePreviousPage={handlePreviousPage}
			            handleNextPage={handleNextPage}
			            currentPage={currentPage}/>
			{isLoading ? <Skeleton type={"item"}
			                       count={100}/> : <NewsList news={news}/>}
		</main>
	);
};

export default Main;