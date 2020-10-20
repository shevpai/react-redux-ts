import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../reducers/actions';
import { ReposState } from '../reducers/reposReducer';
import { AppState } from '../reducers/rootReducer';
import { pageCreator } from '../utils/pageCreator';

export const Pagination: FC = () => {
  const dispatch = useDispatch();
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
                onClick={() => dispatch(setCurrentPage(currentPage - 1))}
              >
                Back
              </a>
            </li>
            {pages.map((page, id) => (
              <li key={id} className={`page-item ${currentPage === page ? 'active' : ''}`}>
                <a
                  className="page-link"
                  href={`#${currentPage}`}
                  onClick={() => dispatch(setCurrentPage(page))}
                >
                  {page}
                </a>
              </li>
            ))}
            <li className={`page-item ${currentPage === pagesCount ? 'disabled' : ''}`}>
              <a
                className="page-link"
                href={`#${currentPage}`}
                onClick={() => dispatch(setCurrentPage(currentPage + 1))}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};
