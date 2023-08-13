import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterInput, FilterLabel } from './filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const setFilterValue = event => {
    let value = event.currentTarget.value.toUpperCase();
    dispatch(setFilter(value));
  };

  return (
    <>
      <FilterLabel htmlFor="filter-field">
        Find contacts by name:
        <FilterInput
          id="filter-field"
          type="text"
          placeholder="Enter search query"
          onChange={setFilterValue}
        />
      </FilterLabel>
    </>
  );
}
export default Filter;
