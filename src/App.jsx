import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Auth, Home, TextCoding, TextCodingSession, BlocksCodingSession } from './pages';
import ProtectedRoutes from './routes/ProtectedRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Auth />} path='/login' />
          <Route element={<Home />} path='/' />
          <Route element={<BlocksCodingSession />} path='/bloques/:id' />
          <Route element={<TextCoding />} path='/texto/:id' />
          <Route element={<TextCodingSession />} path='/texto/:id/usuario/:user' />
          <Route element={<ProtectedRoutes />}>
            <Route element={<TextCodingSession />} path='/texto/:id/usuario/:user/sala/:room' />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
