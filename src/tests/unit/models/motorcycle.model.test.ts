import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleModel from '../../../models/Motorcycle';
import { Model } from 'mongoose';
import {
  motorcycleMock,
  motorcycleWithId,
	motorcycleUpdatedMock
} from '../mocks/motorcycleMock';

describe('2 - Motorcycle Model', () => {
	const motorcycleModel = new MotorcycleModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(motorcycleWithId);
		sinon.stub(Model, 'find').resolves([motorcycleWithId]);
		sinon.stub(Model, 'findById').resolves(motorcycleWithId);
		sinon.stub(Model, 'findOneAndUpdate').resolves(motorcycleUpdatedMock);
		sinon.stub(Model, 'findOneAndRemove').resolves(motorcycleWithId);
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

	describe('3 - ReadOne Motorcycle', () => {
		it('successfully', async () => {
			const newMotorcycle = await motorcycleModel.readOne(motorcycleWithId._id);
			expect(newMotorcycle).to.be.deep.equal(motorcycleWithId);
		});
	});

	describe('4 - Update Motorcycle', () => {
		it('successfully', async () => {
			const newMotorcycle = await motorcycleModel.update(motorcycleWithId._id, motorcycleUpdatedMock);
			expect(newMotorcycle).to.be.deep.equal(motorcycleUpdatedMock);
		});
	});

	describe('5 - Delete Motorcycle', () => {
		it('successfully', async () => {
			const newMotorcycle = await motorcycleModel.delete(motorcycleWithId._id);
			expect(newMotorcycle).to.be.deep.equal(motorcycleWithId);
		});
	});
});