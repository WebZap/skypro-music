import React from "react";
import Search from "../CenterBlock/Search/Search";
import SongsList from "../CenterBlock/SongsList/SongsList";

const UsersListTracks = () => {
    return (
        <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Мои треки</h2>
            <SongsList />
        </div>
    );
};

export default UsersListTracks;
