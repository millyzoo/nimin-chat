const USER_NAME = "user";

export const setUser = (user) => {
  localStorage.setItem(USER_NAME, JSON.stringify(user));
};

export const getUser = () => {
  return localStorage.getItem(USER_NAME);
};

export const scrollToTop = () => window.scrollTo(0, 0);

export function checkTextFormat(string, lengthLimit, setErrorMessages) {
  if (string.length > lengthLimit + 1) {
    setErrorMessages(`長度最多 ${lengthLimit} 個字元`);
    return false;
  }

  if (string.match(/[\s]/g) !== null) {
    setErrorMessages('不得含空白字元');
    return false;
  }
  return true;
}
