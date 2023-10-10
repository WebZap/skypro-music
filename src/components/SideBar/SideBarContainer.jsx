// sideBarCards={props.state.sideBar.sideBarCardsArray}

import { connect } from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = (state) => {
    return {
        sideBarCards: state.sideBar.sideBarCardsArray,
    };
};

const SideBarContainer = connect(mapStateToProps, null)(SideBar);
export default SideBarContainer;
