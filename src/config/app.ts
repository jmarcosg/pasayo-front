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
  name: 'Test',
  github: {
    title: 'jmarcosg',
    url: 'https://github.com/jmarcosg',
  },
  author: {
    name: 'jmarcosg',
    url: 'https://github.com/jmarcosg',
  },
};
