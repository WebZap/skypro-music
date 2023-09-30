import { useState } from "react";
import FIlterButton from "./FilterButton/FIlterButton";
import {
    Title,
    WrraperFilter,
} from "../../../styled_components/filterComponents";
const Filter = (props) => {
    return (
        <WrraperFilter>
            <Title>Искать по:</Title>
            <FIlterButton
                dataList={props.filterAuthor.dataFilter}
                title={props.filterAuthor.title}
                onClickFilter={props.saveOpenFilter}
                filter={props.filterAuthor.filter}
                filterOpen={props.filterOpen}
            />
            <FIlterButton
                dataList={props.filterYear.dataFilter}
                title={props.filterYear.title}
                onClickFilter={props.saveOpenFilter}
                filter={props.filterYear.filter}
                filterOpen={props.filterOpen}
            />
            <FIlterButton
                dataList={props.filterGenre.dataFilter}
                title={props.filterGenre.title}
                onClickFilter={props.saveOpenFilter}
                filter={props.filterGenre.filter}
                filterOpen={props.filterOpen}
            />
        </WrraperFilter>
    );
};

export default Filter;
