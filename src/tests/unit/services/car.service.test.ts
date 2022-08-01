import { ZodError } from 'zod';
import { expect } from 'chai';
import * as sinon from 'sinon';
import {
	carMock,
	carMockWithId,
	carMockWithIdToUpdate,
	carMockWithIdUpdated,
	fakeId
} from '../mocks/carMock';
import CarService from '../../../services/Car';
import CarModel from '../../../models/Car';
import { ErrorTypes } from '../../../errors/catalog';

describe('3 - Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
		sinon.stub(carModel, 'readOne')
			.onCall(0).resolves(carMockWithId) 
			.onCall(1).resolves(null);
		sinon.stub(carModel, 'update')
			.onCall(0).resolves(carMockWithIdUpdated)
			.onCall(1).resolves(null);
		sinon.stub(carModel, 'delete')
			.onCall(0).resolves(carMockWithId) 
			.onCall(1).resolves(null);
	})

	after(() => { sinon.restore() })

	describe('1 - Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);
			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try { await carService.create({} as any) } 
			catch (error) { expect(error).to.be.instanceOf(ZodError) }
		});
	});

	describe('2 - Read Car', () => {
		it('Success', async () => {
			const carCreated = await carService.read();
			expect(carCreated).to.be.deep.equal([carMockWithId]);
		});
	});

	describe('3 - ReadOne Car', () => {
		it('Success', async () => {
			const carCreated = await carService.readOne(carMockWithId._id);
			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		// Outra forma de trabalhar com TS... 
		// throw new Error("Not Implemented")

		it('Failure - entity not exists', async () => {
			try { await carService.readOne(carMockWithId._id) } 
			catch(error: any) { expect(error.message).to.be.eql(ErrorTypes.EntityNotFound) }
		});
	});

	describe('4 - Update Car', () => {
		it('Success', async () => {
			const carCreated = await carService
				.update(carMockWithId._id, carMockWithIdToUpdate);
			expect(carCreated).to.be.deep.equal(carMockWithIdUpdated);
		});

		it('Failure - not found', async () => {
			try {
				await carService.update(carMockWithId._id, carMockWithIdToUpdate);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});

		it('Failure', async () => {
			try { await carService.update(fakeId, {} as any) } 
			catch (error) { expect(error).to.be.instanceOf(ZodError) }
		});
	});

	describe('5 - Delete Car', () => {
		it('Success', async () => {
			const carCreated = await carService.delete(carMockWithId._id);
			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure - not found', async () => {
			try {
				await carService.delete(carMockWithId._id);
			} catch (error: any) {
				expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
			}
		});
	});
});

// template para criação dos testes de cobertura da camada de service


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