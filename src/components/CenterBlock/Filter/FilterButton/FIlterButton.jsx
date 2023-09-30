import {
    FilterButton,
    WrappButton,
} from "../../../../styled_components/filterComponents";
import FilterList from "./FilterList/FilterList";

const FIlterButton = (props) => {
    const { title, isOpen, selectFilter, dataList } = props;

    return (
        <WrappButton>
            <FilterButton onClick={selectFilter}>{title}</FilterButton>
            {isOpen && <FilterList dataList={dataList} />}
        </WrappButton>
    );
};

export default FIlterButton;
