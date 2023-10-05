import { APP_NAME } from '../config';

const KEY = window.location.origin + '/' + APP_NAME;

export const getSession = () => JSON.parse(sessionStorage.getItem(KEY));

export const isValidSession = () => {
  const valid = getSession();

  if (!valid) {
    sessionStorage.removeItem(KEY);
  }

  return valid;
};
