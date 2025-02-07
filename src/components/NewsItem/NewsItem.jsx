import React from 'react';
import cl from "./styles.module.css"
import {formatTimeAgo} from "../../helpers/formatTimeAgo.js";

const NewsItem = ({item}) => {
	return (
		<li className={cl.item}>
			<div className={cl.wrapper} style={{backgroundImage: `url(${item.image})`}}>
			</div>
			<div className={cl.info}>
				<h3 className={cl.title}>{item.title}</h3>
				<p className={cl.extra}>{formatTimeAgo(item.published)} by {item.author}</p>
			</div>

		</li>
	);
};

export default NewsItem;