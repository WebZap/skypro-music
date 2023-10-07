import React, { useState } from "react";
import SkeletonPlayTrack from "../Skeleton_modules/SkeletonPlayTrack";
import PlayTrackBlock from "./PlayTrackBlock/PlayTrackBlock";
import {
    Content,
    Controls,
    DisLikeButton,
    ImageVolume,
    LDSBvg,
    LikeButton,
    LineProgress,
    NextButton,
    NextSvg,
    PlayButton,
    PlaySvg,
    Player,
    PreSvg,
    PrevButton,
    Progress,
    ProgressVolume,
    RepeatButton,
    RepeatSvg,
    ShuffleButton,
    ShuffleSvg,
    SvgVolume,
    VolumeBlock,
    WrappBar,
    WrappContent,
    WrappLikeDisLike,
    WrappPlayer,
    WrappTrackPlay,
    WrappVolume,
} from "../../styled_components/playerBarComponents";

const PlayerBar = (props) => {
    const { intireTrackData } = props;
    console.log(intireTrackData);

    return (
        <WrappBar>
            <WrappContent>
                <Progress />
                <WrappPlayer>
                    <Player>
                        <Controls>
                            <PrevButton>
                                <PreSvg alt="prev">
                                    <use xlinkHref="/img/icon/sprite.svg#icon-prev"></use>
                                </PreSvg>
                            </PrevButton>
                            <PlayButton>
                                <PlaySvg alt="play">
                                    <use xlinkHref="/img/icon/sprite.svg#icon-play"></use>
                                </PlaySvg>
                            </PlayButton>
                            <NextButton>
                                <NextSvg alt="next">
                                    <use xlinkHref="/img/icon/sprite.svg#icon-next"></use>
                                </NextSvg>
                            </NextButton>
                            <RepeatButton>
                                <RepeatSvg alt="repeat">
                                    <use xlinkHref="/img/icon/sprite.svg#icon-repeat"></use>
                                </RepeatSvg>
                            </RepeatButton>
                            <ShuffleButton>
                                <ShuffleSvg alt="shuffle">
                                    <use xlinkHref="/img/icon/sprite.svg#icon-shuffle"></use>
                                </ShuffleSvg>
                            </ShuffleButton>
                        </Controls>

                        <WrappTrackPlay>
                            {intireTrackData ? (
                                <PlayTrackBlock
                                    intireTrackData={intireTrackData}
                                />
                            ) : (
                                <SkeletonPlayTrack />
                            )}

                            <WrappLikeDisLike>
                                <LikeButton>
                                    <LDSBvg
                                        // className="track-play__like-svg"
                                        alt="like"
                                    >
                                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                                    </LDSBvg>
                                </LikeButton>
                                <DisLikeButton>
                                    <LDSBvg
                                        // className="track-play__dislike-svg"
                                        alt="dislike"
                                    >
                                        <use xlinkHref="/img/icon/sprite.svg#icon-dislike"></use>
                                    </LDSBvg>
                                </DisLikeButton>
                            </WrappLikeDisLike>
                        </WrappTrackPlay>
                    </Player>
                    <VolumeBlock>
                        <WrappVolume>
                            <ImageVolume>
                                <SvgVolume alt="volume">
                                    <use xlinkHref="/img/icon/sprite.svg#icon-volume"></use>
                                </SvgVolume>
                            </ImageVolume>
                            <ProgressVolume>
                                <LineProgress type="range" name="range" />
                            </ProgressVolume>
                        </WrappVolume>
                    </VolumeBlock>
                </WrappPlayer>
            </WrappContent>
        </WrappBar>
    );
};

export default PlayerBar;
