import { SideBarBlock } from "../../styled_components/sidebarComponents";
import Personal from "./Personal/Personal";
import SidebarCards from "./SidebarCards/SidebarCards";

const SideBar = (props) => {
    console.log(props);
    const { sideBarCards } = props;
    return (
        <SideBarBlock>
            <Personal onButtonLogout={props.onButtonLogout} />
            <SidebarCards sideBarCards={sideBarCards} />
        </SideBarBlock>
    );
};

export default SideBar;
