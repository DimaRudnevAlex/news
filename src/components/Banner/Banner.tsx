import {FC} from 'react';
import Image from "../Image/Image.tsx";

import cl from "./styles.module.css"
import {formatTimeAgo} from "../../helpers/formatTimeAgo.ts";
import {INews} from "../../interfaces";

interface Props {
    item: INews;
}

const Banner: FC<Props> = ({item}) => {
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

export default Banner;