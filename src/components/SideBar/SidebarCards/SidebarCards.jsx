import { useState } from "react";
import SkeletonSidebar from "../../Skeleton_modules/SkeletonSidebar";
import SidebarItem from "./SidebarItem/SidebarItem";

const SidebarCards = (props) => {
    const [viseble, setViseble] = useState(false);

    setTimeout(() => {
        setViseble(true);
    }, 2000);

    let sideBarItems = props.sideBarCards.map((card) =>
        viseble ? (
            <SidebarItem
                key={card.id}
                src={card.src}
                href={card.ref}
                alt={card.altData}
            />
        ) : (
            <SkeletonSidebar />
        )
    );

    return <div className="sidebar__block">{sideBarItems}</div>;
};

export default SidebarCards;
