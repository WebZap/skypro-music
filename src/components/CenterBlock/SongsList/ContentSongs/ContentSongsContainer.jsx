import { useEffect, useState } from "react";
import SkeletonTrack from "../../../Skeleton_modules/SkelotonTrack";

import SongItem from "./SongItem/SongItem";
import { Playlist } from "../../../../styled_components/songsListComponents";
import axios from "axios";
import ContentSongs from "./ContentSongs";
import { connect } from "react-redux";
import {
    setAllTracks,
    setEntireTrack,
    setVisibleTracks,
} from "../../../../redux/reducers/songsReducer";

// isPlayerView : false, - openPlayerEntireTrack(){ПО КЛИКУ МЕНЯТЬ ТРУ НА ФОЛС} - там будет тернарник п.с Влада
//

const ContentSongsContainer = (props) => {
    const {
        tracks,
        isVisible,
        setAllTracks,
        setVisibleTracks,
        setEntireTrack,
        isFetching,
    } = props;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://skypro-music-api.skyeng.tech/catalog/track/all/"
                );
                setAllTracks(response.data);
                setTimeout(() => {
                    setVisibleTracks();
                }, 2000);
            } catch (error) {
                alert(error);
            }
        };
        fetchData();
    }, []);

    function convertSecondsToMinutes(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
    }

    return (
        <>
            {isFetching ? (
                <ContentSongs
                    convertTime={convertSecondsToMinutes}
                    tracks={tracks}
                    isVisible={isVisible}
                    setEntireTrack={setEntireTrack}
                />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        tracks: state.tracksHalf.tracks,
        isVisible: state.tracksHalf.isVisible,
        isFetching: state.tracksHalf.isFetching,
    };
};

export default connect(mapStateToProps, {
    setAllTracks,
    setVisibleTracks,
    setEntireTrack,
})(ContentSongsContainer);
