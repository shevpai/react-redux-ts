import React, { FC } from 'react';
import { formatDate } from '../utils/formatDate';
import { starFormatter } from '../utils/starFormatter';
import { RepoPropTypes } from './Repo';

const body: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  minHeight: 100,
};

const container: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
};

export const Card: FC<RepoPropTypes> = ({ repo }: RepoPropTypes) => (
  <div className="col-sm-6 mb-1" key={repo.id}>
    <div className="card mb-4">
      <div className="card-body" style={body}>
        <div style={container}>
          <svg
            className="octicon-repo mr-2 mb-1 flex-shrink-0"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
            />
          </svg>

          <h5>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </h5>
        </div>
        <div style={container}>
          <svg
            aria-label="star"
            className="octicon octicon-star mr-1 mb-1 flex-shrink-0"
            viewBox="0 0 16 16"
            version="1.1"
            width="16"
            height="16"
            role="img"
          >
            <path
              fillRule="evenodd"
              d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
            />
          </svg>
          <div className="repo-header-stars">{starFormatter(repo.stargazers_count)}</div>
        </div>
        {repo.description && (
          <span className="text-secondary">
            {repo.description.length > 55
              ? `${repo.description.slice(0, 55)}...`
              : repo.description}
          </span>
        )}
        <div className="repo-last-commit">
          Last update:&nbsp;
          {formatDate(new Date(repo.updated_at))}
        </div>
      </div>
    </div>
  </div>
);
