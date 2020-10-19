import React, { FC } from 'react';
import { Repo } from './Repo';
import { useGithub } from '../hooks/useGithub';

export const Repos: FC = () => {
  const { items: repos } = useGithub();

  return (
    <div className="row">
      {repos.map((repo) => (
        <Repo key={repo.id} repo={repo} />
      ))}
    </div>
  );
};
