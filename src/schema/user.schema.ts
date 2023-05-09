import z, { string } from 'zod';

const zUserSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z
      .string({ required_error: 'Password is required' })
      .min(6, 'Password is too short'),
    confirmPassword: z.string({ required_error: 'Password is required' }),
  }),
});
