// import { List } from "react-content-loader";
import {
    BurgerNavLink,
    List,
} from "../../../styled_components/navMenuComponents";

const MenuList = () => {
    return (
        <List>
            <BurgerNavLink to="/">Главное</BurgerNavLink>
            <BurgerNavLink to="/">Мой плейлист</BurgerNavLink>
            <BurgerNavLink to="/">Войти</BurgerNavLink>
        </List>
    );
};

export default MenuList;
