import React from "react";
import {
    Album,
    AlbumLink,
    Author,
    AuthorLink,
    Contain,
    TrackImage,
    TrackSvg,
} from "../../../styled_components/playerBarComponents";

function PlayTrackBlock(props) {
    const { intireTrackData } = props;

    return (
        <Contain>
            <TrackImage>
                <TrackSvg alt="music">
                    <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                </TrackSvg>
            </TrackImage>
            <Author>
                <AuthorLink href="http://">
                    {intireTrackData.name
                        ? `${intireTrackData.name.slice(0, 6)} . . .`
                        : " - "}
                </AuthorLink>
            </Author>
            <Album>
                <AlbumLink href="http://">
                    {intireTrackData.author !== "-"
                        ? `${intireTrackData.author.slice(0, 3)} . . .`
                        : " -"}
                </AlbumLink>
            </Album>
        </Contain>
    );
}

export default PlayTrackBlock;
