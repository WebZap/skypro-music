import React from "react";
import {
    FilterListItems,
    FilterListWrapp,
    FilterNavLinks,
} from "../../../../../styled_components/filterComponents";

const FilterList = ({ dataList, onClickFilter }) => {
    return (
        <FilterListWrapp>
            <FilterListItems>
                {dataList.map((item) => (
                    <FilterNavLinks
                        onClick={() => {
                            onClickFilter("");
                        }}
                        to={item.path}
                    >
                        {item.titleItem}
                    </FilterNavLinks>
                ))}
            </FilterListItems>
        </FilterListWrapp>
    );
};

export default FilterList;
