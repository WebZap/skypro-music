import { useState } from "react";
import FIlterButton from "./FilterButton/FIlterButton";
import {
    Title,
    WrraperFilter,
} from "../../../styled_components/filterComponents";
const Filter = (props) => {
    const [activeFilter, setActiveFilter] = useState(null);

    const selectFilter = (filter) => {
        if (filter === activeFilter) {
            setActiveFilter(null);
            return;
        } else {
            setActiveFilter(filter);
        }
    };
    return (
        <WrraperFilter>
            <Title>Искать по:</Title>
            <FIlterButton
                dataList={props.filterAuthor.dataFilter}
                isOpen={activeFilter === props.filterAuthor.filter}
                title={props.filterAuthor.title}
                selectFilter={() => {
                    selectFilter(props.filterAuthor.filter);
                }}
            />
            <FIlterButton
                dataList={props.filterYear.dataFilter}
                isOpen={activeFilter === props.filterYear.filter}
                title={props.filterYear.title}
                selectFilter={() => {
                    selectFilter(props.filterYear.filter);
                }}
            />
            <FIlterButton
                dataList={props.filterGenre.dataFilter}
                isOpen={activeFilter === props.filterGenre.filter}
                title={props.filterGenre.title}
                selectFilter={() => {
                    selectFilter(props.filterGenre.filter);
                }}
            />
        </WrraperFilter>
    );
};

export default Filter;
