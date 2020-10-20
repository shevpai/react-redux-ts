import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAlert } from '../hooks/useAlert';
import { clearRepos, setCurrentPage, setSearchQuery } from '../reducers/actions';

export const Search: FC = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const onSubmit = async (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') {
      return;
    }

    dispatch(clearRepos());

    if (value.trim()) {
      dispatch(setCurrentPage(1));
      dispatch(setSearchQuery(value));
    } else alert.show('Input is empty! Please, enter some value', 'warning', true);

    setValue('');
  };

  return (
    <div className="form-group mt-4 mb-4">
      <input
        type="text"
        className="form-control input-centered"
        placeholder="Enter github repository name here"
        spellCheck="false"
        value={value}
        onChange={changeHandler}
        onKeyPress={onSubmit}
      />
    </div>
  );
};
