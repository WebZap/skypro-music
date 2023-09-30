import {
    Icon,
    Name,
    PersonalWrapp,
} from "../../../styled_components/sidebarComponents";

const Personal = () => {
    return (
        <PersonalWrapp>
            <Name>Sergey.Ivanov</Name>
            <Icon>
                <svg alt="logout">
                    <use xlinkHref="img/icon/sprite.svg#logout"></use>
                </svg>
            </Icon>
        </PersonalWrapp>
    );
};

export default Personal;
