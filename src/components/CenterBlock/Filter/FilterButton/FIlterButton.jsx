import React, { useState } from "react";
import FilterList from "./FilterList/FilterList";
import { getTitleFilterName } from "../../../../redux/store****";
import { NavLink } from "react-router-dom";

const FIlterButton = (props) => {
    const { title, isOpen, selectFilter, path, dataList } = props;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
            }}
        >
            <div
                className="filter__button button-author _btn-text"
                onClick={selectFilter}
            >
                {title}
            </div>
            {isOpen && <FilterList dataFilter={dataList} />}
        </div>
    );
};

export default FIlterButton;
