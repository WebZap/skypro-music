import { useNavigate } from "react-router-dom";
import {
    Icon,
    Name,
    PersonalWrapp,
} from "../../../styled_components/sidebarComponents";
import { connect } from "react-redux";
import { resetAllDataTrack } from "../../../redux/reducers/songsReducer";

const Personal = ({ onButtonLogout, resetAllDataTrack }) => {
    const navigate = useNavigate();
    console.log(onButtonLogout);
    return (
        <PersonalWrapp>
            <Name>Sergey.Ivanov</Name>
            <Icon
                onClick={() => {
                    onButtonLogout();
                    resetAllDataTrack();
                    navigate("/login", { replace: false });
                }}
            >
                <svg alt="logout">
                    <use xlinkHref="/img/icon/sprite.svg#logout"></use>
                </svg>
            </Icon>
        </PersonalWrapp>
    );
};

export default connect(null, { resetAllDataTrack })(Personal);
