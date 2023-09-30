import { Route, Routes } from "react-router-dom";
import ContentSongs from "./ContentSongs/ContentSongs";
import {
    Column,
    Content,
    Title,
    TitleSvg,
} from "../../../styled_components/songsListComponents";

const SongsList = () => {
    return (
        <Content>
            <Title>
                <Column width={447}>Трек</Column>
                <Column width={321}>ИСПОЛНИТЕЛЬ</Column>
                <Column width={245}>АЛЬБОМ</Column>
                <Column width={60} align={"end"}>
                    <TitleSvg alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </TitleSvg>
                </Column>
            </Title>
            <Routes>
                <Route path="/" element={<ContentSongs />} />
                {/* <Route path="/author-filter/" element={<ContentSongs />} />
                <Route path="/year-filter/" element={<ContentSongs />} />
                <Route path="/genre-filter/" element={<ContentSongs />} /> */}
                {/* <Route
                    path="/playlist-day-filter/"
                    element={<ContentSongs />}
                />
                <Route path="/100-dance-filter/" element={<ContentSongs />} />
                <Route path="/indi-filter/" element={<ContentSongs />} /> */}
            </Routes>
        </Content>
    );
};

export default SongsList;
