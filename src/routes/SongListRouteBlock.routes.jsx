import React from "react";
import { Route, Routes } from "react-router-dom";
import ContentSongs from "../components/CenterBlock/SongsList/ContentSongs/ContentSongs";

const SongsListRouteBlock = () => {
    return (
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
    );
};

export default SongsListRouteBlock;
