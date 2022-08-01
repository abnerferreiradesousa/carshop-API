import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import {
  motorcycleMock,
  motorcycleWithId,
} from '../mocks/motorcycleMock';
import MotorcycleController from '../../../controllers/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import MotorcycleModel from '../../../models/Motorcycle';


describe('1 - Motorcycle Controller', () => {
  const motorcycleModel = new MotorcycleModel()
  const motorcycleService = new MotorcycleService(motorcycleModel);
  const motorcycleController = new MotorcycleController(motorcycleService);

  const req = {} as Request; 
  const res = {} as Response;

  before(() => {
    sinon.stub(motorcycleService, 'create').resolves(motorcycleWithId);
    sinon.stub(motorcycleService, 'read').resolves([motorcycleWithId]);
    // sinon.stub(motorcycleService, 'readOne').resolves(carMockWithId);
    // sinon.stub(motorcycleService, 'update').resolves(carMockWithIdUpdated);
    // sinon.stub(motorcycleService, 'delete').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('1 - Create Motorcycle', () => {
    it('Success', async () => {
      req.body = motorcycleMock;
      await motorcycleController.create(req, res);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleWithId)).to.be.true;
    });
  });

  describe('2 - Read Motorcycle', () => {
    it('Success', async () => {
      req.body = motorcycleMock;
      await motorcycleController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith([motorcycleWithId])).to.be.true;
    });
  });

  describe('3 - ReadOne Motorcycle', () => {
    it('Success', async () => {
      req.body = motorcycleMock;
      await motorcycleController.readOne(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(motorcycleWithId)).to.be.true;
    });
  });
});