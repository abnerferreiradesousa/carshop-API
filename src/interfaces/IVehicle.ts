import { z } from 'zod';

const VehicleZodSchema = z.object({
  year: z.string().min(1900).max(2021),
  status: z.boolean().optional(),
  buyValue: z.number({
    invalid_type_error: 'buyValue must be a number',
  }).int(),
  color: z.string().min(3, { 
    message: 'Color must be 3 or more characters long' }),
  model: z.string({
    invalid_type_error: 'Model must be a string',
  }).min(3, { message: 'Model must be 3 or more characters long' }),
});

type IVehicle = z.infer<typeof VehicleZodSchema>;

export { VehicleZodSchema, IVehicle };