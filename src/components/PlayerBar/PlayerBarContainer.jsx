import React, { useEffect } from "react";

import { connect } from "react-redux";
import PlayerBar from "./PlayerBar";
import { setDataEntireTrack } from "../../redux/reducers/songsReducer";
import trackApi from "../../api/trackAPI";

const PlayerBarContainer = (props) => {
    const { intireTrackID, intireTrackData, setDataEntireTrack, isFetching } =
        props;
    console.log(intireTrackID);
    useEffect(() => {
        if (intireTrackID) {
            trackApi.getEntireTrack(setDataEntireTrack, intireTrackID);
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
