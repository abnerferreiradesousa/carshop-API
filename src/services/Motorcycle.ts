import { isValidObjectId } from 'mongoose';
import { MotorcycleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';
// import { IService } from '../interfaces/IService';

// export default class MotorcycleService implements IService<IMotorcycle> { 
export default class MotorcycleService { 
  private _motorcycle:IModel<IMotorcycle>;
  constructor(model:IModel<IMotorcycle>) {
    this._motorcycle = model;
  }
  
  public async create(obj:IMotorcycle):Promise<IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error; 
    return this._motorcycle.create(obj);
  }

  public async read(): Promise<IMotorcycle[]> {
    const motors = await this._motorcycle.read();
    return motors;
  }

  public async readOne(_id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const car = await this._motorcycle.readOne(_id);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(
    _id: string, 
    carToUpdate: IMotorcycle,
  ): Promise<IMotorcycle | null> {
    const parsed = MotorcycleZodSchema.safeParse(carToUpdate);
    if (!parsed.success) throw parsed.error; 
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const car = await this._motorcycle.update(_id, carToUpdate);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async delete(_id: string): Promise<IMotorcycle | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const car = await this._motorcycle.delete(_id);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }
}