import { isValidObjectId } from 'mongoose';
import { IService } from '../interfaces/IService';
import { CarZodSchema, ICar } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../errors/catalog';

class CarService implements IService<ICar> { 
  private _car:IModel<ICar>;
  constructor(model:IModel<ICar>) { this._car = model; }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error; 
    return this._car.create(obj);
  }

  public async read(): Promise<ICar[]> {
    const cars = await this._car.read();
    return cars;
  }

  public async readOne(_id: string): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const car = await this._car.readOne(_id);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async update(_id: string, carToUpdate: ICar): Promise<ICar | null> {
    const parsed = CarZodSchema.safeParse(carToUpdate);
    if (!parsed.success) throw parsed.error; 
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const car = await this._car.update(_id, carToUpdate);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }

  public async delete(_id: string): Promise<ICar | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    const car = await this._car.delete(_id);
    if (!car) throw Error(ErrorTypes.EntityNotFound);
    return car;
  }
}

export default CarService;