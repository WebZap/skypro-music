/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ContentSongs from "./ContentSongs";
import { connect } from "react-redux";
import {
    setAllTracks,
    setEntireTrack,
    setVisibleTracks,
} from "../../../../redux/reducers/songsReducer";
import trackApi from "../../../../api/trackAPI";

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
        trackApi.getAllTracks(setAllTracks).then(() => {
            setTimeout(() => {
                setVisibleTracks();
            }, 2000);
        });
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
