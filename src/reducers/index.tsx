import { combineReducers } from 'redux';
import GithubReducers from './GithubReducers';

export default combineReducers({
    Gh: GithubReducers
});
