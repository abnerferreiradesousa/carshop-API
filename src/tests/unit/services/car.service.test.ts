import { ZodError } from 'zod';
import { ErrorTypes } from '../../../errors/catalog';
import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import {carMock, carMockWithId} from '../mocks/carMock';
import CarController from '../../../controllers/Car';
import CarService from '../../../services/Car';
import CarModel from '../../../models/Car';

describe('1 - Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);
 
	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);
		sinon.stub(carModel, 'read').resolves([carMockWithId]);
	})
	after(() => {
		sinon.restore()
	})
	describe('Create Car', () => {
		it('Success', async () => {
			const carCreated = await carService.create(carMock);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

		it('Failure', async () => {
			try {
				await carService.create({} as any);
			} catch (error) {
				expect(error).to.be.instanceOf(ZodError);
			}
		});
	});

	describe('Read Car', () => {
		it('Success', async () => {
			const carCreated = await carService.read();

			expect(carCreated).to.be.deep.equal([carMockWithId]);
		});

		// it('Failure', async () => {
		// 	try {
		// 		await carService.create({} as any);
		// 	} catch (error) {
		// 		expect(error).to.be.instanceOf(ZodError);
		// 	}
		// });
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