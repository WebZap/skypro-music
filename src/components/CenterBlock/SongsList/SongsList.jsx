import {
    Column,
    Content,
    Title,
    TitleSvg,
} from "../../../styled_components/songsListComponents";
import SongsListRouteBlock from "../../../routes/SongListRouteBlock.routes";
import ContentSongs from "./ContentSongs/ContentSongs";
import ContentSongsContainer from "./ContentSongs/ContentSongsContainer";

const SongsList = () => {
    return (
        <Content>
            <Title>
                <Column width={447}>Трек</Column>
                <Column width={321}>ИСПОЛНИТЕЛЬ</Column>
                <Column width={245}>АЛЬБОМ</Column>
                <Column width={60} align={"end"}>
                    <TitleSvg alt="time">
                        <use xlinkHref="/img/icon/sprite.svg#icon-watch"></use>
                    </TitleSvg>
                </Column>
            </Title>
            <ContentSongsContainer />
        </Content>
    );
};

export default SongsList;
