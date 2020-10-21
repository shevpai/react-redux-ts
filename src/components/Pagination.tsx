import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useGithub } from '../hooks/useGithub';
import { ReposState } from '../reducers/reposReducer';
import { AppState } from '../reducers/rootReducer';
import { pageCreator } from '../utils/pageCreator';

export const Pagination: FC = () => {
  const { toPage } = useGithub()
  const { totalCount, perPage, currentPage } = useSelector<AppState, ReposState>(
    (state) => state.repos,
  );
  const pagesCount: number = Math.ceil(totalCount / perPage);

  const pages: number[] = [];

  pageCreator(pages, pagesCount, currentPage);

  return (
    <>
      {pages && (
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className={`page-item ${currentPage > 1 ? '' : 'disabled'}`}>
              <a
                className="page-link"
                href={`#${currentPage}`}
                tabIndex={-1}
                aria-disabled="true"
                onClick={toPage.bind(null, currentPage - 1)}
              >
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            {pages.map((page, id) => (
              <li key={id} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <a
                  className="page-link"
                  href={`#${currentPage}`}
                  onClick={toPage.bind(null, page)}
                >
                  {page}
                </a>
              </li>
            ))}
            <li className={`page-item ${currentPage === pagesCount ? 'disabled' : ''}`}>
              <a
                className="page-link"
                href={`#${currentPage}`}
                onClick={toPage.bind(null, currentPage + 1)}
              >
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
