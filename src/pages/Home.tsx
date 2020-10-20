import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Loader } from '../components/Loader';
import { Pagination } from '../components/Pagination';
import { Repos } from '../components/Repos';
import { Search } from '../components/Search';
import { useGithub } from '../hooks/useGithub';
import { ReposState } from '../reducers/reposReducer';
import { AppState } from '../reducers/rootReducer';

export const Home: FC = () => {
  const { getRepos, isFetching: loading } = useGithub();
  const {
    items, currentPage, perPage, searchQuery, 
  } = useSelector<AppState, ReposState>(
    (state) => state.repos,
  );

  useEffect(() => {
    getRepos(searchQuery, currentPage, perPage);
    // eslint-disable-next-line
  }, [currentPage, searchQuery]);

  return (
    <>
      <Search />

      {loading ? (
        <Loader />
      ) : (
        <>
          <Repos />
          {items[0] && <Pagination />}
        </>
      )}
    </>
  );
};
