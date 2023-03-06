import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/selectors';
import { Img, Label } from './Filter.styled';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  function handleFilter({ target }) {
    dispatch(setFilter(target.value));
  }

  return (
    <Label>
      <label className="label">
        Search
        <Img />
        <input
          className="input"
          type="text"
          name="search"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </Label>
  );
}

export default Filter;
