import cl from "./styles.module.css"
import BannersList from "../BannersList/BannersList.tsx";
import {useGetLatestNewsQuery} from "../../store/services/newsApi.ts";

const LatestNews = () => {


    const {data, isLoading} = useGetLatestNewsQuery(null)

    return (
        <section className={cl.section}>
            <BannersList banners={data && data.news}
                         isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;