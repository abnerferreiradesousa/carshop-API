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
import { ErrorTypes } from '../../../errors/catalog';
import { fakeId } from '../mocks/carMock';

describe('3 - Motorcycle Service', () => {
	const motorcycleModel = new MotorcycleModel();
	const motorcycleService = new MotorcycleService(motorcycleModel);
 
	before(() => {
		sinon.stub(motorcycleModel, 'create').resolves(motorcycleWithId);
		sinon.stub(motorcycleModel, 'read').resolves([motorcycleWithId]);
		sinon.stub(motorcycleModel, 'readOne')
			.onCall(0).resolves(motorcycleWithId) 
			.onCall(1).resolves(null);
		sinon.stub(motorcycleModel, 'update')
			.onCall(0).resolves(motorcycleUpdatedMock) 
			.onCall(1).resolves(motorcycleUpdatedMock) 
			.onCall(2).resolves(null);
		sinon.stub(motorcycleModel, 'delete')
			.onCall(0).resolves(motorcycleWithId) 
			.onCall(1).resolves(null) 

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
			try { await motorcycleService.read() } 
			catch (error) { expect(error).to.be.instanceOf(ZodError) }
		});
	});

	describe('3 - ReadOne motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService.readOne(motorcycleWithId._id);
			expect(motorcycleFounded).to.be.deep.equal(motorcycleWithId);
		});
		it('Failure - entity not exists', async () => {
			try { await motorcycleService.readOne(fakeId) } 
			catch(error: any) { expect(error.message).to.be.eql(ErrorTypes.EntityNotFound) }
		});
	});

	describe('4 - Update motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService
				.update(motorcycleWithId._id, motorcycleToUpdate);
			expect(motorcycleFounded).to.be.deep.equal(motorcycleUpdatedMock);
		});

		it('Failure - objet invalid', async () => {
			try { await motorcycleService.update(motorcycleWithId._id, {} as any) } 
			catch(error: any) { 
				expect(error).to.be.instanceOf(ZodError);
			}
		});

		it('Failure - not found', async () => {
			try {
				await motorcycleService.update(motorcycleWithId._id, motorcycleToUpdate);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});

	describe('5 - Delete motorcycle', () => {
		it('Success', async () => {
			const motorcycleFounded = await motorcycleService.delete(motorcycleWithId._id);
			expect(motorcycleFounded).to.be.deep.equal(motorcycleWithId);
		});

		it('Failure - entity not exists', async () => {
			try { await motorcycleService.delete(fakeId) } 
			catch(error: any) { expect(error.message).to.be.eql(ErrorTypes.EntityNotFound) }
		});
	});
});