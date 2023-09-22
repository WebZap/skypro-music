import { Route, Routes } from "react-router-dom";
import ContentSongs from "./ContentSongs/ContentSongs";

const SongsList = () => {
    return (
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
                <div className="playlist-title__col col03">АЛЬБОМ</div>
                <div className="playlist-title__col col04">
                    <svg className="playlist-title__svg" alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
                    </svg>
                </div>
            </div>
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
        </div>
    );
};

export default SongsList;
