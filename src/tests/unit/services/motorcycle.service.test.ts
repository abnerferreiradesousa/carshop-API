import { ZodError } from 'zod';
import { expect } from 'chai';
import * as sinon from 'sinon';
import {
  motorcycleMock,
  motorcycleWithId,
	motorcycleToUpdate,
	motorcycleUpdatedMock
} from '../mocks/motorcycleMock';
import MotorcycleService from '../../../services/Motorcycle';
import MotorcycleModel from '../../../models/Motorcycle';

describe('3 - Motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);
 
	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleWithId);
		sinon.stub(motorcycleModel, 'read').resolves([motorcycleWithId]);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleWithId) 
		sinon.stub(motorcycleModel, 'update').resolves(motorcycleUpdatedMock);
		sinon.stub(motorcycleModel, 'delete').resolves(motorcycleWithId);
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
			const motorcycleFounded = await motorcycleService.readOne(motorcycleWithId._id);
			expect(motorcycleFounded).to.be.deep.equal(motorcycleWithId);
		});
	});

	describe('4 - Update motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService
				.update(motorcycleWithId._id, motorcycleToUpdate);
			expect(motorcycleFounded).to.be.deep.equal(motorcycleUpdatedMock);
		});
	});

	describe('5 - Delete motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService.delete(motorcycleWithId._id);
			expect(motorcycleFounded).to.be.deep.equal(motorcycleWithId);
		});
	});
});