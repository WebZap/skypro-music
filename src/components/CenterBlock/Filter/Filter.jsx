import React, {useState} from "react";
import FIlterButton from "./FilterButton/FIlterButton";
import {getTitleFilterName} from "../../../redux/store";
const Filter = () => {
    const [activeFilter, setActiveFilter] = useState(null);

    let titleActive = getTitleFilterName()

    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FIlterButton title={'исполнителю'}/>
            <FIlterButton title={'году'}/>
            <FIlterButton title={'жанра'}/>
        </div>
    );
};

export default Filter;
