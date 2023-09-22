import { NavLink } from "react-router-dom";

const MenuList = () => {
    return (
        <ul className="menu__list">
            <li className="menu__item">
                <a href="#" className="menu__link">
                    Главное
                </a>
            </li>
            <NavLink style={{ display: "block" }} to="/" className="menu__item">
                Мой плейлист
            </NavLink>
            <li className="menu__item">
                <a href="../signin.html" className="menu__link">
                    Войти
                </a>
            </li>
        </ul>
    );
};

export default MenuList;
