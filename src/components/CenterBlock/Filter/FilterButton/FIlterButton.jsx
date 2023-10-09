import {
    FilterButton,
    WrappButton,
} from "../../../../styled_components/filterComponents";
import FilterList from "./FilterList/FilterList";

const FIlterButton = (props) => {
    const { title, onClickFilter, dataList, filter, filterOpen } = props;

    return (
        <WrappButton>
            <FilterButton onClick={() => onClickFilter(filter)}>
                {title}
            </FilterButton>
            {/* {isOpen && <FilterList dataList={dataList} />} */}
            {filter === filterOpen ? (
                <FilterList dataList={dataList} onClickFilter={onClickFilter} />
            ) : null}
        </WrappButton>
    );
};

export default FIlterButton;
