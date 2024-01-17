import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const DemoSheet = () => {
  return (
    <div className='mt-6'>
      <h2 className='font-bold'>Sheet</h2>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant='outline'>Open</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
            </SheetHeader>
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label className='text-right' htmlFor='name'>
                  Name
                </Label>
                <Input className='col-span-3' id='name' value='Pedro Duarte' />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label className='text-right' htmlFor='username'>
                  Username
                </Label>
                <Input className='col-span-3' id='username' value='@peduarte' />
              </div>
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type='submit'>Save changes</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default DemoSheet;
