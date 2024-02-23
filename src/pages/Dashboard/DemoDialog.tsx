import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { demoDialogFormSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const DemoDialog = () => {
  const [validForm, setValidForm] = useState(false);
  const form = useForm<z.infer<typeof demoDialogFormSchema>>({
    resolver: zodResolver(demoDialogFormSchema),
    defaultValues: {
      name: '',
      username: '',
    },
  });

  const onSubmit = (values: z.infer<typeof demoDialogFormSchema>) => {
    if (values) {
      setValidForm(!validForm);
      console.log(values);
    } else {
      setValidForm(false);
    }
  };

  return (
    <div className='mt-6'>
      <h2 className='font-bold'>Dialog</h2>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='outline'>Edit Profile</Button>
        </DialogTrigger>

        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form className='grid gap-4 pt-4' onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
                    </FormControl>
                    <FormDescription>This is your public display name.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder='shadcn' {...field} />
                    </FormControl>
                    <FormDescription>This is your public display username.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <DialogFooter className='pt-4'>
                <Button type='submit'>Save changes</Button>
              </DialogFooter>
              {validForm && <small className='text-center text-primary'>Form is valid. Check console</small>}
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DemoDialog;
