import { mainMenu } from '@/components/layout/header/menu';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { NavLink } from 'react-router-dom';

const DesktopNav = () => {
  return (
    <nav className='flex items-center space-x-6 text-sm font-medium'>
      {mainMenu.map((menu, index) =>
        menu.items !== undefined ? (
          <DropdownMenu key={index}>
            <DropdownMenuTrigger
              className={cn(
                'flex items-center py-1 text-sm font-medium transition-colors hover:text-primary focus:outline-none',
                menu.items
                  .filter((subitem) => subitem.to !== undefined)
                  .map((subitem) => subitem.to)
                  .includes(location.pathname)
                  ? 'text-foreground'
                  : 'text-foreground/60'
              )}
            >
              {menu.title}
              <ChevronDownIcon className='-mr-1 ml-1 h-3 w-3 text-muted-foreground' />
            </DropdownMenuTrigger>
            <DropdownMenuContent forceMount align='start' className='w-48'>
              {menu.items.map((subitem, subindex) =>
                subitem.to !== undefined ? (
                  <NavLink key={subindex} to={subitem.to}>
                    <DropdownMenuItem
                      className={cn('hover:cursor-pointer', { 'bg-muted': subitem.to === location.pathname })}
                    >
                      {subitem.title}
                    </DropdownMenuItem>
                  </NavLink>
                ) : subitem.label ? (
                  <DropdownMenuLabel key={subindex}>{subitem.title}</DropdownMenuLabel>
                ) : (
                  <DropdownMenuSeparator key={subindex} />
                )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink
            key={index}
            className={({ isActive }) =>
              cn(
                'text-sm font-medium transition-colors hover:text-primary',
                isActive ? 'text-foreground' : 'text-foreground/60'
              )
            }
            to={menu.to ?? ''}
          >
            {menu.title}
          </NavLink>
        )
      )}
    </nav>
  );
};

export default DesktopNav;
