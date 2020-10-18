import React, { FC } from 'react';

export const Search: FC = () => (
  <div className="form-group mt-4 mb-4">
    <input
      type="text"
      className="form-control input-centered"
      placeholder="Enter github repository name here"
      spellCheck="false"
    />
  </div>
);
