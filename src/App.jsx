// import { Router } from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Login, Home, TextCoding } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Home />} path='/' />
          <Route element={<TextCoding />} path='/texto' />
          <Route element={<Login />} path='/login' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
