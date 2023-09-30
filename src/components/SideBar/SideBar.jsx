import { SideBarBlock } from "../../styled_components/sidebarComponents";
import Personal from "./Personal/Personal";
import SidebarCards from "./SidebarCards/SidebarCards";

const SideBar = (props) => {
    return (
        <SideBarBlock>
            <Personal />
            <SidebarCards
                sideBarCards={props.state.sideBar.sideBarCardsArray}
            />
        </SideBarBlock>
    );
};

export default SideBar;
