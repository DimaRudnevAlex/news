import React from 'react';
import Image from "../Image/Image.jsx";

import cl from "./styles.module.css"
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";
import withSkeleton from "../../helpers/hocs/withSkeleton.jsx";

const Banner = ({item}) => {
	return (
		<div className={cl.banner}>
			{item && <>
				<Image image={item?.image}/>
				<h3 className={cl.title}>{item.title}</h3>
				<p className={cl.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
			</>}
		</div>
	);
};

const BannerWithSkeleton = withSkeleton(Banner, "banner", 1)
export default BannerWithSkeleton;