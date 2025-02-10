import React from "react";
import cl from "./styles.module.css"
import NewsItem from "../NewsItem/NewsItem.tsx";
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import {INews} from "../../interfaces";


interface Props {
	news?: INews[];
}

const NewsList: React.FC<Props> = ({news}) => {
	return (
		<ul className={cl.list}>
			{news?.map(item => {
				return (
					<NewsItem key={item.id} item={item} />
				)
			})}
		</ul>
	);
};
const ListWithSkeleton = withSkeleton<Props>(NewsList, "item", 10)

export default ListWithSkeleton;