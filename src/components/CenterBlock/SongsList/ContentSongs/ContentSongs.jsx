import { useEffect, useState } from "react";
import SkeletonTrack from "../../../Skeleton_modules/SkelotonTrack";

import SongItem from "./SongItem/SongItem";
import { Playlist } from "../../../../styled_components/songsListComponents";
import axios from "axios";

// isPlayerView : false, - openPlayerEntireTrack(){ПО КЛИКУ МЕНЯТЬ ТРУ НА ФОЛС} - там будет тернарник п.с Влада
//

const ContentSongs = (props) => {
    const { convertTime, tracks, isVisible, setEntireTrack } = props;
    return (
        <Playlist>
            {tracks.map((song) => {
                return isVisible ? (
                    <SongItem
                        key={song.id}
                        song={song}
                        onSaveDuration={convertTime}
                        onClickTrack={setEntireTrack}
                    />
                ) : (
                    <SkeletonTrack />
                );
            })}
        </Playlist>
    );
};
export default ContentSongs;
