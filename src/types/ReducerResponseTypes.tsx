export type ActionSuccess = {
    avatar_url: string;
    name: string;
    blog: string;
    login: string;
    readme: string;
    bio: string;
};

export type ActionRepoSuccess = {
    repos: Array<any>;
};

export type ActionFail = {
    error: string;
};
