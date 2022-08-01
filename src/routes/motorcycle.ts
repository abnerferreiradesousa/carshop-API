import { Router } from 'express';
import MotorcycleController from '../controllers/Motorcycle';
import MotorcycleModel from '../models/Motorcycle';
import MotorcycleService from '../services/Motorcycle';

const route = Router();
 
const motocycle = new MotorcycleModel();
const motocycleService = new MotorcycleService(motocycle);
const motocycleController = new MotorcycleController(motocycleService);

route.post('/', (req, res) => motocycleController.create(req, res));
route.get('/', (req, res) => motocycleController.read(req, res));
route.get('/:id', (req, res) => motocycleController.readOne(req, res));
route.put('/:id', (req, res) => motocycleController.update(req, res));
route.put('/:id', (req, res) => motocycleController.delete(req, res));

export default route;