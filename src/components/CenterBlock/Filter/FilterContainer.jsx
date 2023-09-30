import { openFilter } from "../../../redux/reducers/filterListsReducer";
import Filter from "./Filter";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        filterAuthor: state.filterButtons.filterAuthor,
        filterYear: state.filterButtons.filterYear,
        filterGenre: state.filterButtons.filterGenre,
        filterOpen: state.filterButtons.filterOpen,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveOpenFilter: (text) => {
            dispatch(openFilter(text));
        },
    };
};

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
