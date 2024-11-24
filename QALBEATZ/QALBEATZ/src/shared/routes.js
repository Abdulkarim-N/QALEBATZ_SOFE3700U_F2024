const base = "/react-qalbeatz";
//const userid = localStorage.getItem('userid')
let userid = ''
export const user_id = (uid) => {
  console.log("Received variable:", uid);
  userid = uid;
  console.log(userid)
};
export const getloggedRoute = (userid) => `${base}/user/${userid}`
export const routes = {
  HOME: base,
  LOGIN: `${base}/login`,
  SEARCH: `${base}/`,
  PLAYLIST: `${base}/playlist`,
  USERPLAYLIST: `${base}/user/:userid/playlist`,
  SIGNUP: `${base}/signup`,
  LOGGED: `${base}/user/:userid`,
  JOURNAL: `${base}/user/:userid/journal`
};

export const paths = {
  HOME: routes.HOME,
  LOGIN: routes.LOGIN,
  SEARCH: routes.SEARCH,
  PLAYLIST: `${routes.PLAYLIST}/:playlistId`,
  SIGNUP: routes.SIGNUP,
  LOGGED: routes.LOGGED,
  USERPLAYLIST: `${routes.LOGGED}/playlist/:playlistId`,
  JOURNAL: `${routes.LOGGED}/journal`
};

