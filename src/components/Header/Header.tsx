import cl from "./styles.module.css"
import {formatDate} from "../../helpers/formatDate.ts";
import {themeIcons} from "../../assets";
import {useTheme} from "../../context/ThemeContext.tsx";


const Header = () => {
    const {isDark, toggleDark} = useTheme();
    return (
        <header className={`${cl.header} ${isDark ? cl.dark : cl.light}`}>
            <div className={cl.info}>
                <h1 className={cl.title}>DAR NEWS</h1>
                <p className={cl.date}>{formatDate(new Date())}</p>
            </div>
            <img src={isDark ? themeIcons.light : themeIcons.dark}
                 alt="themeIcons"
                 width={30}
                 onClick={toggleDark}/>
        </header>
    );
};

export default Header;