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
  name: 'Sample App',
  github: {
    title: 'React Shadcn Template',
    url: 'https://github.com/jmarcosg/template-react-ts-shadcn',
  },
  author: {
    name: 'jmarcosg',
    url: 'https://github.com/jmarcosg',
  },
};
