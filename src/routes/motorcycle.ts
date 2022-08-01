import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const route = Router();
 
const motocycle = new MotorcycleModel();
const motocycleService = new MotorcycleService(motocycle);
const motocycleController = new MotorcycleController(motocycleService);

route.post(
  '/motorcycles', 
  (req, res) => motocycleController.create(req, res),
);

route.get('/motorcycles', (req, res) => motocycleController.read(req, res));

export default route;