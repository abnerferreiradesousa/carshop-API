import { Model } from 'mongoose';
// import { IModel } from '../interfaces/IModel';
  
// abstract class MongoModel<T> implements IModel<T> {
abstract class MongoModel<T> {
  protected _model:Model<T>;
  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj:T):Promise<T> {
    return this._model.create({ ...obj });
  }

  public async read(): Promise<T[]> {
    const cars = await this._model.find();
    return cars;
  }
}

export default MongoModel;
