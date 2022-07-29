const carMock = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
}

const carMockWithId = {
  year: 1963,
  buyValue: 3500000,
  color: "red",
  model: "Ferrari Maranello",
  seatsQty: 2,
  doorsQty: 2,
  _id: "62e4486c5db2ec3d8c01b1cf"
}

const carMockWithIdToUpdate = {
  year: 1970,
  buyValue: 2400000,
  color: "blue",
  model: "Lamborghini Urus",
  seatsQty: 5,
  doorsQty: 5,
}

const carMockWithIdUpdated = {
  year: 1970,
  buyValue: 2400000,
  color: "blue",
  model: "Lamborghini Urus",
  seatsQty: 5,
  doorsQty: 5,
  _id: "62e4486c5db2ec3d8c01b1cf"
}
export {
  carMock, 
  carMockWithId,
  carMockWithIdToUpdate,
  carMockWithIdUpdated
}