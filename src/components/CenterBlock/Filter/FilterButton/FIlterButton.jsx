import {
    FilterButton,
    WrappButton,
} from "../../../../styled_components/filterComponents";
import FilterList from "./FilterList/FilterList";

const FIlterButton = (props) => {
    const changeStatus = () => {
        if (filter === filterOpen) {
        }
    };

    const { title, onClickFilter, dataList, filter, filterOpen } = props;
    console.log(filterOpen);
    return (
        <WrappButton>
            <FilterButton onClick={() => onClickFilter(filter)}>
                {title}
            </FilterButton>
            {/* {isOpen && <FilterList dataList={dataList} />} */}
            {filter === filterOpen ? <FilterList dataList={dataList} /> : null}
        </WrappButton>
    );
};

export default FIlterButton;
