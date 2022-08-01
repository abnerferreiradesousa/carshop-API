// import { ZodError } from 'zod';
// import { ErrorTypes } from '../../../errors/catalog';
// import { expect } from 'chai';
// import * as sinon from 'sinon';
// import { NextFunction, Request, Response } from 'express';
// import {carMock, carMockWithId, carMockWithIdToUpdate, carMockWithIdUpdated} from '../mocks/carMock';
// import CarController from '../../../controllers/Car';
// import CarService from '../../../services/Car';
// import CarModel from '../../../models/Car';

// describe('3 - Car Service', () => {
// 	const carModel = new CarModel();
// 	const carService = new CarService(carModel);
 
// 	before(() => {
// 		sinon.stub(carModel, 'create').resolves(carMockWithId);
// 		sinon.stub(carModel, 'read').resolves([carMockWithId]);
// 		sinon.stub(carModel, 'readOne')
// 			.onCall(0).resolves(carMockWithId) 
// 			.onCall(1).resolves(null)
// 		sinon.stub(carModel, 'update').resolves(carMockWithIdUpdated);
// 		sinon.stub(carModel, 'delete').resolves(carMockWithId);
// 	})
// 	after(() => {
// 		sinon.restore()
// 	})
// 	describe('1 - Create Car', () => {
// 		it('Success', async () => {
// 			const carCreated = await carService.create(carMock);

// 			expect(carCreated).to.be.deep.equal(carMockWithId);
// 		});

// 		it('Failure', async () => {
// 			try {
// 				await carService.create({} as any);
// 			} catch (error) {
// 				expect(error).to.be.instanceOf(ZodError);
// 			}
// 		});
// 	});

// 	describe('2 - Read Car', () => {
// 		it('Success', async () => {
// 			const carCreated = await carService.read();

// 			expect(carCreated).to.be.deep.equal([carMockWithId]);
// 		});
// 	});

// 	describe('3 - ReadOne Car', () => {
// 		it('Success', async () => {
// 			const carCreated = await carService.readOne(carMockWithId._id);

// 			expect(carCreated).to.be.deep.equal(carMockWithId);
// 		});
// 		// it('Failure', async () => {
// 		// 	const fakeId = "62e45fe854ac30f03ef53982";
// 		// 	try {
// 		// 		const carCreated = await carService.readOne(fakeId);
// 		// 		expect(carCreated).to.be.deep.equal(carMockWithId);
// 		// 	} catch(error: any) {
// 		// 		console.log(error.message);
				
// 		// 		expect(error).to.be.eql(ErrorTypes.EntityNotFound);
// 		// 	}
// 		// });
// 	});

// 	describe('4 - Update Car', () => {
// 		it('Success', async () => {
// 			const carCreated = await carService.update(carMockWithId._id, carMockWithIdToUpdate);

// 			expect(carCreated).to.be.deep.equal(carMockWithIdUpdated);
// 		});
// 	});

// 	describe('5 - Delete Car', () => {
// 		it('Success', async () => {
// 			const carCreated = await carService.delete(carMockWithId._id);

// 			expect(carCreated).to.be.deep.equal(carMockWithId);
// 		});
// 	});
// });

// // template para criação dos testes de cobertura da camada de service


// // import * as sinon from 'sinon';
// // import chai from 'chai';
// // const { expect } = chai;

// // describe('Sua descrição', () => {

// //   before(async () => {
// //     sinon
// //       .stub()
// //       .resolves();
// //   });

// //   after(()=>{
// //     sinon.restore();
// //   })

// //   it('', async () => {});

// // });