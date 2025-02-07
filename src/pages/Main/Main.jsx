import React, {useEffect, useState} from 'react';

import NewsList from "../../components/NewsList/NewsList.jsx";
import Banner from "../../components/Banner/Banner.jsx";
import Skeleton from "../../components/Skeleton/Skeleton.jsx";

import cl from "./styles.module.css"
import {getNews} from "../../api/apiNews.js";


const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const fetchNews = async () => {
			try {
				setIsLoading(true)
				const response = await getNews();
				setNews(response.news)
				setIsLoading(false)
			} catch (e) {
				console.log(e)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={cl.main}>
			{news.length > 0 && !isLoading ? <Banner item={news[1]}/> : <Skeleton type={"banner"}
			                                                                      count={1}/>}
			{isLoading ? <Skeleton type={"item"}
			                       count={100}/> : <NewsList news={news}/>}
		</main>
	);
};

export default Main;