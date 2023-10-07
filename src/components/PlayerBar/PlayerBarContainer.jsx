import React, { useEffect, useState } from "react";

import { connect } from "react-redux";
import PlayerBar from "./PlayerBar";
import axios from "axios";
import { setDataEntireTrack } from "../../redux/reducers/songsReducer";

const PlayerBarContainer = (props) => {
    const { intireTrackID, intireTrackData, setDataEntireTrack, isFetching } =
        props;
    console.log(intireTrackID);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://skypro-music-api.skyeng.tech/catalog/track/${intireTrackID}`
                );
                setDataEntireTrack(response.data);
            } catch (error) {
                alert(`Здесь ошибка бля ${error}`);
            }
        };
        debugger;
        if (intireTrackID) {
            fetchData();
        }
    }, [intireTrackID]);

    return (
        <>
            {isFetching ? (
                <PlayerBar intireTrackData={intireTrackData} />
            ) : null}
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        intireTrackID: state.tracksHalf.intireTrack.id,
        isFetching: state.tracksHalf.intireTrack.isFetching,
        intireTrackData: state.tracksHalf.intireTrack.dataTrack,
    };
};

export default connect(mapStateToProps, { setDataEntireTrack })(
    PlayerBarContainer
);
