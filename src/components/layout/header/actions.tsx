import { ModeToggle } from '../../mode-toggle';
import HeaderAvatar from './header-avatar';

const Actions = () => {
  return (
    <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
      <div className='w-full flex-1 md:w-auto md:flex-none'>{/* <CommandMenu /> */}</div>
      <ModeToggle />
      <nav className='flex items-center space-x-2'>
        <HeaderAvatar />
      </nav>
    </div>
  );
};

export default Actions;
