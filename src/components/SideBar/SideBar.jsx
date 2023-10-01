import { SideBarBlock } from "../../styled_components/sidebarComponents";
import Personal from "./Personal/Personal";
import SidebarCards from "./SidebarCards/SidebarCards";

const SideBar = (props) => {
    const { sideBarCards } = props;
    return (
        <SideBarBlock>
            <Personal />
            <SidebarCards sideBarCards={sideBarCards} />
        </SideBarBlock>
    );
};

export default SideBar;
