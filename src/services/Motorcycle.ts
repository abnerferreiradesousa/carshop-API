import { MotorcycleZodSchema, IMotorcycle } from '../interfaces/IMotorcycle';
import { IModel } from '../interfaces/IModel';
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

  // public delete = () => 'delete';

  // public update = () => 'update';

  // public read = () => 'read';

  // public readOne = () => 'readOne';
}