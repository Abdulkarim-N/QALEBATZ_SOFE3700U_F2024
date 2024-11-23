const base = "/react-qalbeatz";

export const routes = {
  HOME: base,
  LOGIN: `${base}/login`,
  SEARCH: `${base}/`,
  PLAYLIST: `${base}/playlist`,
  SIGNUP: `${base}/signup`,
  LOGGED: `${base}/user`,
  JOURNAL: `${base}/user/journal`,
};

export const paths = {
  HOME: routes.HOME,
  LOGIN: routes.LOGIN,
  SEARCH: routes.SEARCH,
  PLAYLIST: `${routes.PLAYLIST}/:playlistId`,
  SIGNUP: routes.SIGNUP,
  LOGGED: routes.LOGGED,
  USERPLAYLIST: `${routes.LOGGED}/playlist/:playlistId`,
  JOURNAL: `${routes.LOGGED}/journal`,
};

