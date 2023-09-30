import {
    Card,
    ImageS,
    LinkS,
} from "../../../../styled_components/sidebarComponents";

const SidebarItem = (props) => {
    return (
        <Card>
            <LinkS href={props.href}>
                <ImageS src={props.src} alt={props.alt} />
            </LinkS>
        </Card>
    );
};

export default SidebarItem;
