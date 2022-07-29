import { model as mongooseCreateModel, Schema } from 'mongoose';
import { ICar } from '../interfaces/ICar';
import MongoModel from './MongoModel';

const carMongooseSchema = new Schema<ICar>({
  year: Number,
  status: Boolean,
  buyValue: Number,
  color: String,
  model: String,
  seatsQty: Number,
  doorsQty: Number,
}, {
  versionKey: false,
});

class Car extends MongoModel<ICar> {
  constructor(model = mongooseCreateModel('Car', carMongooseSchema)) {
    super(model);
  }
}

export default Car;