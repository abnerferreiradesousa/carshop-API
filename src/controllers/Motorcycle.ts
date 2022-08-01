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
    const motoCreated = await this._service.create(newMotorcycle);
    return res.status(201).json(motoCreated);
  }

  public async read(req: Request, res: Response<IMotorcycle[]>) {
    const motoCreated = await this._service.read();
    return res.status(200).json(motoCreated);
  }

  public async readOne(req: Request, res: Response<IMotorcycle | null>) {
    const motor = await this._service.readOne(req.params.id);
    return res.status(200).json(motor);
  }

  public async update(req: Request, res: Response<IMotorcycle | null>) {
    const carUpdated = await this._service.update(req.params.id, req.body);
    return res.status(200).json(carUpdated);
  }

  public async delete(req: Request, res: Response<IMotorcycle | null>) {
    await this._service.delete(req.params.id);
    return res.status(204).json({} as unknown as undefined);
  }
}