import {createContext, FC, ReactNode, useContext, useState} from "react";

interface IThemeContext {
    isDark: boolean;
    toggleDark: () => void;
}
interface ThemeProviderProps {
    children: ReactNode;
}
export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
    const [isDark, setIsDark] = useState(false)

    const toggleDark = () => setIsDark(!isDark);
    return (
        <ThemeContext.Provider value={{isDark, toggleDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("useTheme must be used within ThemeContext");
    }
    return context
};

