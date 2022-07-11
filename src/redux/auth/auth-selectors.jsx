const getIsLoggedIn = state => state.auth.isLoggedIn;
const getName = state => state.auth;
const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
const authSelectors = {
  getIsLoggedIn,
  getIsFetchingCurrent,
  getName,
};

export default authSelectors;
