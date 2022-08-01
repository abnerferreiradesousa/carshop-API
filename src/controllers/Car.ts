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

  public async read(_req: Request, res: Response<ICar[]>) {
    const cars = await this._service.read();
    return res.status(200).json(cars);
  }

  public async readOne(req: Request, res: Response<ICar | null>) {
    const cars = await this._service.readOne(req.params.id);
    return res.status(200).json(cars);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const cars = await this._service.update(req.params.id, req.body);
    return res.status(200).json(cars);
  }

  // public async delete(req: Request, res: Response<ICar | null>) {
  //   const cars = await this._service.delete(req.params.id);
  //   return res.status(204).json(cars);
  // }
}