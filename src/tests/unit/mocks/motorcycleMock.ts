import { IMotorcycle } from "../../../interfaces/IMotorcycle"

const motorcycleWithId:IMotorcycle & {_id: string} = {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

const motorcycleMock:IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

const motorcycleUpdatedMock:IMotorcycle & {_id: string} = {
  _id: "62e4486c5db2ec3d8c01b1cf",
  model: "Honda CG Titan 125",
  year: 1973,
  color: "red",
  buyValue:4000,
  category: "Custom",
  engineCapacity: 125
}

export {
  motorcycleMock,
  motorcycleWithId,
  motorcycleUpdatedMock
}