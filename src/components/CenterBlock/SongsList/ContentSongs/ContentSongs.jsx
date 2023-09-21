import { useState } from "react";
import SkeletonTrack from "../../../Skeleton_modules/SkelotonTrack";

import SongItem from "./SongItem/SongItem";

const ContentSongs = () => {
    const [viseble, setViseble] = useState(false);

    setTimeout(() => {
        setViseble(true);
    }, 2000);

    const visibleContent = viseble ? <SongItem /> : <SkeletonTrack />;

    return <div className="content__playlist playlist">{visibleContent}</div>;
};

export default ContentSongs;
