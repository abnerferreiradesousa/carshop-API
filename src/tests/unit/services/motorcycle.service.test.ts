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

describe('3 - motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);
 
	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleWithId);
		sinon.stub(motorcycleModel, 'read').resolves([motorcycleWithId]);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleWithId) 
		// 	.onCall(1).resolves(null)
		// sinon.stub(motorcycleModel, 'update').resolves(motorcycleMockWithIdUpdated);
		// sinon.stub(motorcycleModel, 'delete').resolves(motorcycleMockWithId);
	})
	after(() => {
		sinon.restore()
	})
	describe('1 - Create motorcycle', () => {
		it('Success', async () => {
			const motorcycleCreated = await motorcycleService.create(motorcycleMock);

			expect(motorcycleCreated).to.be.deep.equal(motorcycleWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('2 - Read motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService.read();

			expect(motorcycleFounded).to.be.deep.equal([motorcycleWithId]);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.read();
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('3 - ReadOne motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService.readOne();

			expect(motorcycleFounded).to.be.deep.equal(motorcycleWithId);
		});

		it('Failure', async () => {
			try {
				await motorcycleService.read();
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});
});