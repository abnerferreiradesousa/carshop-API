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

  public async readOne(_id: string): Promise<T | null> {
    const car = await this._model.findById(_id);
    return car;
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    const car = await this._model.findByIdAndUpdate(
      { _id }, 
      { ...obj },
      { new: true },
    );
    return car;
  }

  public async delete(_id: string): Promise<T | null> {
    const car = await this._model.findOneAndRemove({ _id });
    return car;
  }
}

export default MongoModel;
