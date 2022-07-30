import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import {
  motorcycleMock,
  motorcycleWithId,
} from '../mocks/motorcycleMock';
// import MotorcycleController from '../../../controllers/Motorcycle';
import MotorcycleService from '../../../services/Motorcycle';
import MotorcycleModel from '../../../models/Motorcycle';

describe('3 - Car Service', () => {
	const carModel = new MotorcycleModel();
	const carService = new MotorcycleService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(motorcycleWithId);
		// sinon.stub(carModel, 'read').resolves([carMockWithId]);
		// sinon.stub(carModel, 'readOne')
		// 	.onCall(0).resolves(carMockWithId) 
		// 	.onCall(1).resolves(null)
		// sinon.stub(carModel, 'update').resolves(carMockWithIdUpdated);
		// sinon.stub(carModel, 'delete').resolves(carMockWithId);
	})
	after(() => {
		sinon.restore()
	})
	describe('1 - Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(motorcycleMock);

			expect(carCreated).to.be.deep.equal(motorcycleWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});
});