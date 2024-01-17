import * as z from 'zod';

export const demoDialogFormSchema = z.object({
  name: z.string().min(5, {
    message: 'Name must be at least 5 characters.',
  }),
  username: z.string().min(5, {
    message: 'Username must be at least 5 characters.',
  }),
});
