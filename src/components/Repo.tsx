import React, { FC } from 'react';
import { ItemSchema } from '../schemes/ItemSchema';
import { Card } from './Card';

export type RepoPropTypes = {
  repo: ItemSchema;
};

export const Repo: FC<RepoPropTypes> = ({ repo }: RepoPropTypes) => <Card repo={repo} />;
