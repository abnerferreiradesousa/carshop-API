import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

// enum CategoryMotocycle {
//   Street = 'Street', 
//   Custom = 'Custom',
//   Trail = 'Trail',
// }

const MotorcycleZodSchema = VehicleZodSchema.extend({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number({
    required_error: 'engineCapacity is requrid',
  }).int().max(2500),
});

type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;

export {
  IMotorcycle,
  MotorcycleZodSchema,
};