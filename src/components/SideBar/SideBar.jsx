import Personal from "./Personal/Personal";
import SidebarCards from "./SidebarCards/SidebarCards";

const SideBar = (props) => {
    return (
        <div className="main__sidebar sidebar">
            <Personal />
            <SidebarCards sideBarCards={props.sideBarCards} />
        </div>
    );
};

export default SideBar;
