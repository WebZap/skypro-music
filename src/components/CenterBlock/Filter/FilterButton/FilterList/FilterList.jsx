import React from "react";
import { NavLink } from "react-router-dom";

const FilterList = ({ dataFilter }) => {
    return (
        <div
            className="filter-list"
            style={{ position: "absolute", top: "50px" }}
        >
            <ul className="filter-list__items">
                {dataFilter.map((item) => (
                    <NavLink
                        style={{
                            display: "block",
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        to={item.path}
                        className="filter-list__item filter-list__item--active"
                    >
                        {item.titleItem}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
};

export default FilterList;
