import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request & { body: ICar }, res: Response<ICar>) {
    const { model, year, color, buyValue, doorsQty, seatsQty } = req.body;
    const newCar = { model, year, color, buyValue, doorsQty, seatsQty };
    const carCreated = await this._service.create(newCar);
    return res.status(201).json(carCreated);
  }
}