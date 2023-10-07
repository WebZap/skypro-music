// import { List } from "react-content-loader";
import {
    BurgerNavLink,
    List,
} from "../../../styled_components/navMenuComponents";

const MenuList = () => {
    return (
        <List>
            <BurgerNavLink to="/">Главное</BurgerNavLink>
            <BurgerNavLink to="/my-tracks">Мой плейлист</BurgerNavLink>
            <BurgerNavLink to="/login">Войти</BurgerNavLink>
        </List>
    );
};

export default MenuList;
