import React from 'react';
import cl from "./styles.module.css"
import BannersList from "../BannersList/BannersList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getLatestNews, getNews} from "../../api/apiNews.js";

const LatestNews = () => {
	const {data, isLoading} = useFetch(getLatestNews);

	return (
		<section className={cl.section}>
			<BannersList banners={data && data.news} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;