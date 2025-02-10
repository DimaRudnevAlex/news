import cl from "./styles.module.css"
import LatestNews from "../../components/LatestNews/LatestNews.tsx";
import NewsByFilters from "../../components/NewsByFilters/NewsByFilters.tsx";


const Main = () => {

	return (
		<main className={cl.main}>
			<LatestNews/>
			<NewsByFilters/>
		</main>
	);
};

export default Main;