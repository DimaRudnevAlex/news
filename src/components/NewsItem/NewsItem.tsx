import React from "react";

import {formatTimeAgo} from "../../helpers/formatTimeAgo.ts";

import {INews} from "../../interfaces";

import cl from "./styles.module.css"

interface Props {
	item: INews
}

const NewsItem: React.FC<Props> = ({item}) => {
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