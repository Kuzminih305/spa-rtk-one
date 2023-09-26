import {Header} from "@/components/ui/header/header.tsx";
import {Outlet} from "react-router-dom";
import '../../styles/index.scss'
import {useTheme} from "@/theme/use-theme.tsx";







export const Layout = () => {
    const {theme} = useTheme()
    return (
        <div className={`app ${theme}`}>
                <Header />
                <Outlet/>
        </div>
    );
};

