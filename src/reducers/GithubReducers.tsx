import { GHState, ActionSuccess, ActionFail, ActionRepoSuccess } from '../types';

const STATES: GHState = {
    avatar_url: '',
    login: '',
    name: '',
    blog: '',
    error: '',
    readme: '',
    bio: '',
    repos: []
};

type Action =
    | { type: 'SUCCESS'; payload: ActionSuccess }
    | { type: 'GET REPOS SUCCESS'; payload: ActionRepoSuccess }
    | { type: 'GET README SUCCESS'; payload: ActionSuccess }
    | { type: 'GET REPOS FAILED'; payload: ActionFail }
    | { type: 'GET README FAILED'; payload: ActionFail }
    | { type: 'FAILED'; payload: ActionFail }
    | { type: '' };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = STATES, action: Action): GHState => {
    switch (action.type) {
        case 'SUCCESS':
            return {
                ...state,
                avatar_url: action.payload.avatar_url,
                name: action.payload.name,
                blog: action.payload.blog,
                login: action.payload.login,
                bio: action.payload.bio
            };
        case 'GET REPOS SUCCESS':
            return {
                ...state,
                repos: action.payload.repos
            };
        case 'GET README SUCCESS':
            return {
                ...state,
                readme: action.payload.readme
            };
        case 'FAILED':
        case 'GET REPOS FAILED':
        case 'GET README FAILED':
            return {
                ...state,
                error: action.payload.error,
                name: ''
            };
        default:
            return state;
    }
};
