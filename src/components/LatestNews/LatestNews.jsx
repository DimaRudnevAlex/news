import React from 'react';
import cl from "./styles.module.css"
import BannersList from "../BannersList/BannersList.jsx";

const LatestNews = ({banners, isLoading}) => {
	return (
		<section className={cl.section}>
			<BannersList banners={banners} isLoading={isLoading} />
		</section>
	);
};

export default LatestNews;