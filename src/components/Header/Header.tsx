import cl from "./styles.module.css"
import {formatDate} from "../../helpers/formatDate.ts";

const Header = () => {
	return (
		<header className={cl.header}>
			<h1 className={cl.title}>DAR NEWS</h1>
			<p className={cl.date}>{formatDate(new Date())}</p>
		</header>
	);
};

export default Header;