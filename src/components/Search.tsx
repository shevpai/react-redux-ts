import React, { FC, useState } from 'react';
import { useAlert } from '../hooks/useAlert';
import { useGithub } from '../hooks/useGithub';

export const Search: FC = () => {
  const alert = useAlert();
  const { toPage, queryHandler} = useGithub()
  const [value, setValue] = useState('');

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  };

  const onSubmit = async (event: React.KeyboardEvent) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      alert.hide()
      toPage(1)
      queryHandler(value)
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
