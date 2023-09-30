import Filter from "./Filter";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        filterAuthor: state.filterButtons.filterAuthor,
        filterYear: state.filterButtons.filterYear,
        filterGenre: state.filterButtons.filterGenre,
    };
};

const FilterContainer = connect(mapStateToProps, null)(Filter);

export default FilterContainer;
