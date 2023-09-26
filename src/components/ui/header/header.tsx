import {Button} from "@/components/ui";
import {Link} from "react-router-dom";
import s from './header.module.scss'
import {useTheme} from "@/theme/use-theme.tsx";









export const Header = () => {

const {toggleTheme} = useTheme()

    return (
        <div className={s.headerBlock}>
            <Button onClick={toggleTheme}>Toggle</Button>
            <Button as={Link} to="/" variant={'link'}>Главная</Button>
            <Button as={Link} to="/about" variant={'link'}>O сайте</Button>
        </div>
    );
};

