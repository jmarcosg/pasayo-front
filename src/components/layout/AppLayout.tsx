import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './header';

export function AppLayout() {
  return (
    <div className='relative flex min-h-screen flex-col bg-background'>
      <Header />
      <main className='container flex-1 px-4 md:px-8'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
