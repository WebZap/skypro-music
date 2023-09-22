import Filter from "./Filter/Filter";
import Search from "./Search/Search";
import SongsList from "./SongsList/SongsList";

const CenterBlock = (props) => {
    return (
        <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filter filterData={props.state.filterButtons.filterData} />
            <SongsList />
        </div>
    );
};

export default CenterBlock;
