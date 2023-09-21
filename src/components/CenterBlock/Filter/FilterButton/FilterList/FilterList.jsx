import React from 'react';

const FilterList = () => {
    return (
        <div className="filter-list" style={{position:"absolute", top: "50px"}}>
            <ul className="filter-list__items">
                <li className="filter-list__item filter-list__item--active">Активный элемент</li>
                <li className="filter-list__item">Элемент 2</li>
                <li className="filter-list__item">Элемент 3</li>
                <li className="filter-list__item">Элемент 2</li>
                <li className="filter-list__item">Элемент 3</li>
                <li className="filter-list__item">Элемент 2</li>
                <li className="filter-list__item">Элемент 3</li>
                <li className="filter-list__item">Элемент 2</li>
                <li className="filter-list__item">Элемент 3</li>
            </ul>
        </div>
    );
};

export default FilterList;