import {
    IconSearch,
    InputHolder,
    SearchWrapper,
} from "../../../styled_components/searchComponents";

const Search = () => {
    return (
        <SearchWrapper>
            <IconSearch>
                <use xlinkHref="/img/icon/sprite.svg#icon-search"></use>
            </IconSearch>
            <InputHolder type="search" placeholder="Поиск" name="search" />
        </SearchWrapper>
    );
};

export default Search;
