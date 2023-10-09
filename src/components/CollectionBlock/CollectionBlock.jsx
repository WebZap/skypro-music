import React from "react";
import Search from "../CenterBlock/Search/Search";
import SongsList from "../CenterBlock/SongsList/SongsList";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";

const CollectionBlock = ({ cards }) => {
    const { id } = useParams();

    return (
        <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">
                {cards.map((card) => {
                    console.log(card);
                    return card.id === id ? card.title : null;
                })}
            </h2>
            <SongsList />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cards: state.sideBar.sideBarCardsArray,
    };
};

export default connect(mapStateToProps, null)(CollectionBlock);
