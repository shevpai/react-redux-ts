import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../reducers/rootReducer';
import { ReposState } from '../reducers/reposReducer';
import { useAlert } from './useAlert';
import { setRepos, startFetching, stopFetching } from '../reducers/actions';

export function useGithub() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { items, isFetching } = useSelector<AppState, ReposState>((state) => state.repos);

  const getRepos = async (searchQuery: string, currentPage = 1, perPage: number) => {
    try {
      dispatch(startFetching());
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`,
      );

      if (!response.data.items[0]) alert.show('No matches', 'secondary', true);

      dispatch(setRepos(response.data));
      dispatch(stopFetching());
    } catch (e) {
      alert.show('Something went wrong', 'danger', true);
    }
  };

  return {
    getRepos,
    items,
    isFetching,
  };
}
