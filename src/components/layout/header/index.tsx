import { Icons } from '@/components/icons';
import { appConfig } from '@/config/app';
import { NavLink } from 'react-router-dom';
import { Logo } from '../../logo';
import Actions from './actions';
import DesktopNav from './desktop-nav';
import MobileNav from './mobile-nav';

export function Header() {
  return (
    <header className='supports-backdrop-blur:bg-background/60 sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur'>
      <div className='container flex h-14 items-center px-4 md:px-8'>
        <div className='mr-4 hidden md:flex'>
          <NavLink className='mr-6 flex items-center space-x-2' to='/'>
            <Logo />
          </NavLink>

          <DesktopNav />
        </div>

        <MobileNav />

        <a className='mr-6 flex items-center space-x-2 md:hidden' href='/'>
          <Icons.logo className='h-6 w-6' />
          <span className='inline-block font-bold'>{appConfig.name}</span>
        </a>

        <Actions />
      </div>
    </header>
  );
}
