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

function PlayTrackBlock() {
    return (
        <Contain>
            <TrackImage>
                <TrackSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                </TrackSvg>
            </TrackImage>
            <Author>
                <AuthorLink href="http://">Ты та...</AuthorLink>
            </Author>
            <Album>
                <AlbumLink href="http://">Баста</AlbumLink>
            </Album>
        </Contain>
    );
}

export default PlayTrackBlock;
