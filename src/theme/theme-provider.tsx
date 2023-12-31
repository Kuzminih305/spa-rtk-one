import {FC, ReactNode, useMemo, useState} from 'react';

import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "@/theme/theme-context.ts";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

type PropsType = {
    children: ReactNode
}

const ThemeProvider: FC<PropsType> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;


