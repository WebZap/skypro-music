import { useState } from "react";
import SkeletonTrack from "../../../Skeleton_modules/SkelotonTrack";

import SongItem from "./SongItem/SongItem";
import { Playlist } from "../../../../styled_components/songsListComponents";

const ContentSongs = () => {
    const [viseble, setViseble] = useState(false);

    setTimeout(() => {
        setViseble(true);
    }, 2000);

    const visibleContent = viseble ? <SongItem /> : <SkeletonTrack />;

    return <Playlist>{visibleContent}</Playlist>;
};

export default ContentSongs;
