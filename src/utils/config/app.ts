interface AppConfig {
  name: string;
  github: {
    title: string;
    url: string;
  };
  author: {
    name: string;
    url: string;
  };
}

export const appConfig: AppConfig = {
  name: 'Pasayo',
  github: {
    title: 'Pasayo',
    url: 'https://github.com/pasayo',
  },
  author: {
    name: 'jmarcosg',
    url: 'https://github.com/jmarcosg',
  },
};
