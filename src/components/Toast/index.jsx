import { Toaster } from 'react-hot-toast';

const Toast = () => {
  return (
    <Toaster
      containerClassName=''
      containerStyle={{}}
      gutter={8}
      position='bottom-right'
      reverseOrder={false}
      toastOptions={{
        // Define default options
        className: '',
        duration: 5000,
        style: {
          boxShadow: '-4px 4px 4px rgba(0, 0, 0, .2)',
        },

        // Default options for specific types
        success: {
          duration: 3000,
          theme: {
            primary: 'green',
            secondary: 'black',
          },
        },
        error: {
          duration: 4000,
          theme: {
            primary: 'red',
            secondary: 'black',
          },
        },
      }}
    />
  );
};

export default Toast;
