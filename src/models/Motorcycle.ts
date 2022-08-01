import { model as mongooseCreateModel, Schema } from 'mongoose';
import { IMotorcycle } from '../interfaces/IMotorcycle';
import MongoModel from './MongoModel';

const motorcycleMongooseSchema = new Schema<IMotorcycle>({
  year: Number,
  status: Boolean,
  buyValue: Number,
  color: String,
  model: String,
  category: String,
  engineCapacity: Number,
}, {
  versionKey: false,
});

class Motorcycle extends MongoModel<IMotorcycle> {
  constructor(
    model = mongooseCreateModel('Motorcyle', motorcycleMongooseSchema),
  ) { super(model); }
}

export default Motorcycle;

// Try one 

// category: {
//   type: String,
//   enum: ['Street', 'Custom', 'Trail'],
// },