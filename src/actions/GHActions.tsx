import axios from 'axios';
import { Dispatch } from 'redux';

export const fetchUser =
    (username: string) =>
    async (dispatch: Dispatch): Promise<void> => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            dispatch({
                type: 'SUCCESS',
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: 'FAILED',
                payload: error
            });
        }
    };

export const fetchUserRepo =
    (username: string) =>
    async (dispatch: Dispatch): Promise<void> => {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}/repos`);
            const repos = response.data;
            dispatch({
                type: 'GET REPOS SUCCESS',
                payload: { repos }
            });
        } catch (error) {
            dispatch({
                type: 'GET REPOS FAILED',
                payload: error
            });
        }
    };

export const fetchRepoReadme =
    (username: string, name: string) =>
    async (dispatch: Dispatch): Promise<void> => {
        try {
            const response = await axios.get(
                `https://api.github.com/repos/${username}/${name}/readme`
            );
            const ReadmeResponse = await axios.get(response.data.download_url);
            const readme = ReadmeResponse.data;
            dispatch({
                type: 'GET README SUCCESS',
                payload: { readme }
            });
        } catch (error) {
            dispatch({
                type: 'GET README FAILED',
                payload: error
            });
        }
    };
