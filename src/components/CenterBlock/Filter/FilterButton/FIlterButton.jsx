import React, {useState} from 'react';
import FilterList from "./FilterList/FilterList";
import {getTitleFilterName} from "../../../../redux/store";

const FIlterButton = (props) => {
    const [open, setOpen] = useState(null)

    const toggleCLick = () => {
        setOpen((prev)=>!prev)
    }

    getTitleFilterName()

    let filterMenu = open ? <FilterList/> : null

    return (<div style={{display: "flex", flexDirection: "column", position: "relative"}}>

            <div  className="filter__button button-author _btn-text" onClick={toggleCLick}>{props.title}</div>
            {filterMenu}
        </div>
    );
};

export default FIlterButton;