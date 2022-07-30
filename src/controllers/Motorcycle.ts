import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService<IMotorcycle>) { }

  public async create(
    req: Request & { body: IMotorcycle }, 
    res: Response<IMotorcycle>,
  ) {
    const { model, year, color, buyValue, category, engineCapacity } = req.body;
    const newMotorcycle = { 
      model, year, color, buyValue, category, engineCapacity, 
    };
    const carCreated = await this._service.create(newMotorcycle);
    return res.status(201).json(carCreated);
  }
}