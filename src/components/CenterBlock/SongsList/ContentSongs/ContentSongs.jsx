import SkeletonTrack from "../../../Skeleton_modules/SkelotonTrack";

import SongItem from "./SongItem/SongItem";
import { Playlist } from "../../../../styled_components/songsListComponents";

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
