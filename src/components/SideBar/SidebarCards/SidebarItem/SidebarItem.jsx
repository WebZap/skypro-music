
const SidebarItem = (props) => {
    return (
        <div className="sidebar__item">
            <a className="sidebar__link" href={props.href}>
                <img className="sidebar__img" src={props.src} alt={props.alt} />
            </a>
        </div>
    );
};

export default SidebarItem;
