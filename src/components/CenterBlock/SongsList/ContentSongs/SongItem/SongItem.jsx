import {
    BlockAlbum,
    BlockAuthor,
    BlockTime,
    BlockTitle,
    LinkStyle,
    SongWrapper,
    Svg,
    TitleImage,
    Track,
    Uvailable,
    Like,
    Text,
} from "../../../../../styled_components/songsListComponents";

const SongItem = ({ song, onSaveDuration, onClickTrack }) => {
    const { id, album, name, author, logo, duration_in_seconds } = song;

    return (
        <SongWrapper>
            <Track onClick={() => onClickTrack(id)}>
                <BlockTitle>
                    <TitleImage>
                        {logo ? (
                            logo
                        ) : (
                            <Svg alt="music">
                                <use xlinkHref="/img/icon/sprite.svg#icon-note"></use>
                            </Svg>
                        )}
                    </TitleImage>

                    <LinkStyle href="http://">
                        <Uvailable>{name}</Uvailable>
                    </LinkStyle>
                </BlockTitle>

                <BlockAuthor>
                    <LinkStyle align="left" href="http://">
                        {author}
                    </LinkStyle>
                </BlockAuthor>

                <BlockAlbum>
                    <LinkStyle color="#696969" href="http://">
                        {album}
                    </LinkStyle>
                </BlockAlbum>

                <BlockTime>
                    <Like alt="time">
                        <use xlinkHref="/img/icon/sprite.svg#icon-like"></use>
                    </Like>
                    <Text>{onSaveDuration(duration_in_seconds)}</Text>
                </BlockTime>
            </Track>
        </SongWrapper>
    );
};

export default SongItem;
