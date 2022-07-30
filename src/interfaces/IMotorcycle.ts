import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'engineCapacity is required',
  }).int().max(2500),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export {
  IMotorcycle,
  MotorcycleZodSchema,
};