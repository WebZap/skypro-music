import React, { useState } from "react";

import MenuList from "./MenuList/MenuList";
import {
    BurgerMenu,
    Line,
    Logo,
    LogoBlock,
    Menu,
    MenuBlock,
} from "../../styled_components/navMenuComponents";

const NavMenu = () => {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen(!open);
    };

    let burger = open ? <MenuList /> : null;

    return (
        <>
            <MenuBlock>
                <LogoBlock>
                    <Logo src="img/logo.png" alt="logo" />
                </LogoBlock>
                <BurgerMenu onClick={toggleOpen}>
                    <Line />
                    <Line />
                    <Line />
                </BurgerMenu>
                <Menu>{burger}</Menu>
            </MenuBlock>
        </>
    );
};

export default NavMenu;
