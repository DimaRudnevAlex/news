import React from 'react';

import cl from "./styles.module.css"
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";
import Banner from "../Banner/Banner.jsx";

const BannersList = ({banners}) => {
	return (
		<ul className={cl.banners}>
			{banners?.map(banner => {
				return <Banner key={banner.id} item={banner} />
			})}
		</ul>
	);
};

const BannersListsWithSkeleton = withSkeleton(BannersList, "banner", 10, "row")
export default BannersListsWithSkeleton;