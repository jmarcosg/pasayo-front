// import { Router } from './router';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Login, Home, TextCoding, TextCodingSession } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Login />} path='/login' />
          <Route element={<Home />} path='/' />
          <Route element={<TextCoding />} path='/texto/:id' />
          <Route element={<TextCodingSession />} path='/texto/:id/usuario/:user' />
          <Route element={<TextCodingSession />} path='/texto/:id/usuario/:user/sala/:room' />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
