import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleModel from '../../../models/Motorcycle';
import { Model } from 'mongoose';
import {
  motorcycleMock,
  motorcycleWithId,
} from '../mocks/motorcycleMock';

describe('2 - Motorcycle Model', () => {
	const motorcycleModel = new MotorcycleModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(motorcycleWithId);
		sinon.stub(Model, 'find').resolves([motorcycleWithId]);
		// sinon.stub(Model, 'findById').resolves(carMockWithId);
		// sinon.stub(Model, 'findOneAndUpdate').resolves(carMockWithIdUpdated);
		// sinon.stub(Model, 'findOneAndRemove').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	})

	describe('1 - Create Motorcycle', () => {
		it('successfully', async () => {
			const newMotorcycle = await motorcycleModel.create(motorcycleMock);
			expect(newMotorcycle).to.be.deep.equal(motorcycleWithId);
		});
	});

	describe('2 - Read Motorcycle', () => {
		it('successfully', async () => {
			const newMotorcycle = await motorcycleModel.read();
			expect(newMotorcycle).to.be.deep.equal([motorcycleWithId]);
		});
	});
});