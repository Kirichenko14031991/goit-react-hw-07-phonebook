import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import { FilterLabel, FilterInput } from './contactFilter.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filterHandler = e => {
    const { value } = e.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contact by name
      <FilterInput
        value={filter}
        onChange={filterHandler}
        type="text"
        name="filter"
      />
    </FilterLabel>
  );
};

export default Filter;
