// import { Router } from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Login, Prueba } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Prueba />} path='/' />
          <Route element={<Login />} path='/login' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
