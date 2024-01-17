import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { mainMenu } from '@/config/menu';
import { cn } from '@/lib/utils';
import { PanelLeft } from 'lucide-react';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Logo } from '../../logo';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          className='mr-4 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden'
          variant='ghost'
        >
          {/* <ViewVerticalIcon className='h-5 w-5' /> */}
          <PanelLeft className='h-5 w-5' />
          <span className='sr-only'>Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className='pr-0 sm:max-w-xs' side='left'>
        <NavLink className='flex items-center space-x-2' to='/' onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>
        <ScrollArea className='my-4 h-[calc(100vh-8rem)] pb-8 pl-8'>
          <Accordion
            collapsible
            className='w-full'
            defaultValue={
              'item-' +
              mainMenu.findIndex((item) =>
                item.items !== undefined
                  ? item.items
                      .filter((subitem) => subitem.to !== undefined)
                      .map((subitem) => subitem.to)
                      .includes(location.pathname)
                  : false
              )
            }
            type='single'
          >
            <div className='flex flex-col space-y-3'>
              {mainMenu.map((menu, index) =>
                menu.items !== undefined ? (
                  <AccordionItem key={index} className='border-b-0 pr-6' value={`item-${index}`}>
                    <AccordionTrigger
                      className={cn(
                        'py-1 hover:text-primary hover:no-underline [&[data-state=open]]:text-primary',
                        menu.items
                          .filter((subitem) => subitem.to !== undefined)
                          .map((subitem) => subitem.to)
                          .includes(location.pathname)
                          ? 'text-foreground'
                          : 'text-foreground/60'
                      )}
                    >
                      <div className='flex'>{menu.title}</div>
                    </AccordionTrigger>
                    <AccordionContent className='pb-1 pl-4'>
                      <div className='mt-1'>
                        {menu.items.map((submenu, subindex) =>
                          submenu.to !== undefined ? (
                            <NavLink
                              key={subindex}
                              className={({ isActive }) =>
                                cn(
                                  'block h-auto justify-start py-1 font-normal hover:text-primary',
                                  isActive ? 'text-foreground' : 'text-foreground/60'
                                )
                              }
                              to={submenu.to}
                              onClick={() => setOpen(false)}
                            >
                              {submenu.title}
                            </NavLink>
                          ) : submenu.label !== '' ? null : (
                            <div className='px-3'>{/* <Separator /> */}</div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  <NavLink
                    key={index}
                    className={({ isActive }) =>
                      cn(
                        'py-1 text-sm font-medium transition-colors hover:text-primary',
                        isActive ? 'text-foreground' : 'text-foreground/60'
                      )
                    }
                    to={menu.to ?? ''}
                    onClick={() => setOpen(false)}
                  >
                    {menu.title}
                  </NavLink>
                )
              )}
            </div>
          </Accordion>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
