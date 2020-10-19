import React, { FC } from 'react';
import { ItemSchema } from '../schemes/ItemSchema';
import { Card } from './Card';

export type RepoPropTypes = {
  repo: ItemSchema;
};

export const Repo: FC<RepoPropTypes> = ({ repo }: RepoPropTypes) => (
  <div className="col-sm-6 mb-1">
    <Card repo={repo} />
  </div>
);
