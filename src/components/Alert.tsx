import React, { FC } from 'react';
import { useAlert } from '../hooks/useAlert';

export const Alert: FC = () => {
  const { alert, hide } = useAlert();

  if (!alert.visible) return null;

  return (
    <div className={`alert alert-${alert.type} alert-dismissible alert-centered mb-4`}>
      {alert.text}
      <button type="button" className="close" aria-label="Close" onClick={hide}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
