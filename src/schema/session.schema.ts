import z, { string } from 'zod';

const zCreateSessionSchema = z.object({
  body: z.object({
    email: string({ required_error: 'Email is required' }),
    password: string({ required_error: 'Password is required' }),
  }),
});

export default zCreateSessionSchema;
