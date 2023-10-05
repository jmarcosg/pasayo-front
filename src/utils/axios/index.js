import { default as a } from 'axios';

import { URL_BACK } from '../config';

export const axios = a.create({
  baseURL: URL_BACK,
  withCredentials: true,
});
