import React, { useState } from "react";
import FIlterButton from "./FilterButton/FIlterButton";
const Filter = ({ filterData }) => {
    const [activeFilter, setActiveFilter] = useState(null);

    const selectFilter = (filter) => {
        if (filter === activeFilter) {
            setActiveFilter(null);
            return;
        } else {
            setActiveFilter(filter);
        }
    };

    const buttons = filterData.map((btn) => {
        return (
            <FIlterButton
                dataList={btn.dataFilter}
                isOpen={activeFilter === btn.filter}
                title={btn.title}
                selectFilter={() => {
                    selectFilter(btn.filter);
                }}
                path={btn.path}
            />
        );
    });

    // - рендер разметки -
    return (
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            {buttons}
        </div>
    );
};

export default Filter;
