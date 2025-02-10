
import cl from "./styles.module.css"
import withSkeleton from "../../helpers/hocs/withSkeleton.tsx";
import Banner from "../Banner/Banner.tsx";
import {INews} from "../../interfaces";
import {FC} from "react";

interface Props {
	banners?: INews[] | null;
}


const BannersList: FC<Props> = ({banners}) => {
	return (
		<ul className={cl.banners}>
			{banners?.map(banner => {
				return <Banner key={banner.id} item={banner} />
			})}
		</ul>
	);
};

const BannersListsWithSkeleton = withSkeleton<Props>(BannersList, "banner", 10, "row")
export default BannersListsWithSkeleton;