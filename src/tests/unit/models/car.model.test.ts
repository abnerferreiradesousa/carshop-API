import { expect } from 'chai';
import sinon from 'sinon';
import CarModel from '../../../models/Car';
import { Model } from 'mongoose';
import {
	carMock,
	carMockWithId,
  carMockWithIdToUpdate,
  carMockWithIdUpdated,
} from '../mocks/carMock';

describe('2 - Car Model', () => {
	const carModel = new CarModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
		sinon.stub(Model, 'findById').resolves(carMockWithId);
		sinon.stub(Model, 'find').resolves([carMockWithId]);
		sinon.stub(Model, 'findOneAndUpdate').resolves(carMockWithIdUpdated);
	});

	after(() => {
		sinon.restore();
	})

	describe('1 - Create car', () => {
		it('successfully', async () => {
			const newCar = await carModel.create(carMock);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});

  describe('2 - ReadOne car', () => {
		it('successfully', async () => {
			const foundedCar = await carModel.readOne(carMockWithId._id);
			expect(foundedCar).to.be.deep.equal(carMockWithId);
		});
	});

  describe('3 - Read cars', () => {
		it('successfully', async () => {
			const foundedCars = await carModel.read();
			expect(foundedCars).to.be.deep.equal([carMockWithId]);
		});
	});

  describe('4 - Update car', () => {
		it('successfully', async () => {
			const updatedCar = await carModel.update(carMockWithId._id, carMockWithIdToUpdate);
			expect(updatedCar).to.be.deep.equal(carMockWithIdUpdated);
		});
	});
});


// template para criação dos testes de cobertura da camada de model


// import * as sinon from 'sinon';
// import chai from 'chai';
// const { expect } = chai;

// describe('Sua descrição', () => {

//   before(async () => {
//     sinon
//       .stub()
//       .resolves();
//   });

//   after(()=>{
//     sinon.restore();
//   })

//   it('', async () => {});

// });