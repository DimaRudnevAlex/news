import React, {useEffect, useState} from 'react';

import NewsList from "../../components/NewsList/NewsList.jsx";
import Banner from "../../components/Banner/Banner.jsx";

import cl from "./styles.module.css"
import {getNews} from "../../api/apiNews.js";




const Main = () => {
	const [news, setNews] = useState([])

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews();
				setNews(response.news)
			} catch (e) {
				console.log(e)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className={cl.main}>
			{news.length > 0 ? <Banner item={news[0]}/> : null}
			<NewsList news={news}/>
		</main>
	);
};

export default Main;