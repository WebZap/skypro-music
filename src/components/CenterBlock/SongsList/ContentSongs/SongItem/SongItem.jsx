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

const SongItem = () => {
    return (
        <SongWrapper>
            <Track>
                <BlockTitle>
                    <TitleImage>
                        <Svg alt="music">
                            <use xlinkHref="img/icon/sprite.svg#icon-note"></use>
                        </Svg>
                    </TitleImage>

                    <LinkStyle href="http://">
                        Guilt <Uvailable></Uvailable>
                    </LinkStyle>
                </BlockTitle>

                <BlockAuthor>
                    <LinkStyle align="left" href="http://">
                        Nero
                    </LinkStyle>
                </BlockAuthor>

                <BlockAlbum>
                    <LinkStyle color="#696969" href="http://">
                        Welcome Reality
                    </LinkStyle>
                </BlockAlbum>

                <BlockTime>
                    <Like alt="time">
                        <use xlinkHref="img/icon/sprite.svg#icon-like"></use>
                    </Like>
                    <Text>4:44</Text>
                </BlockTime>
            </Track>
        </SongWrapper>
    );
};

export default SongItem;
