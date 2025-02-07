import React from 'react';
import cl from "./styles.module.css"
import NewsItem from "../NewsItem/NewsItem.jsx";

const NewsList = ({news}) => {
	return (
		<ul className={cl.list}>
			{news.map(item => {
				return (

					<NewsItem key={item.id} item={item} />
				)
			})}
		</ul>
	);
};

export default NewsList;