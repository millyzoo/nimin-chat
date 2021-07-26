const USER_NAME = "user";

export const setUser = (user) => {
  localStorage.setItem(USER_NAME, JSON.stringify(user));
};

export const getUser = () => {
  return localStorage.getItem(USER_NAME);
};

export const scrollToTop = () => window.scrollTo(0, 0);
