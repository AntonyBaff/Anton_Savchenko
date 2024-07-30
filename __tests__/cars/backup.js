const { CarsController } = require('../src/controllers/CarsController')

const carsController = new CarsController()

describe('Check Cars API', () => {
beforeAll(async () => {
await carsController.login()
})

afterAll(async () => {
const carsResponse = await carsController.getCars()
const carIds = carsResponse.data.data.map((c) => c.id)
for (const carId of carIds) {
const res = await carsController.deleteCarById(carId)
}
})

test('User can get all cars', async () => {
const carsResponse = await carsController.getCars()
expect(carsResponse.status).toBe(200)
})

test('User can create a new car', async () => {
let carsResponse = await carsController.getCars()
const carList = [...carsResponse.data.data]
const newCarResponse = await carsController.createCar(1, 1, 10)
carsResponse = await carsController.getCars()
const newCarList = carsResponse.data.data
expect(newCarList.length).toBe(carList.length + 1)
expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined()

const newCarResponse1 = await carsController.createCar(1, 2, 10)
carsResponse = await carsController.getCars()
const newCarList1 = carsResponse.data.data
expect(newCarList1.length).toBe(carList.length + 2)
expect(newCarList1.find((car) => car.id === newCarResponse1.data.data.id)).toBeDefined()


const newCarResponse2 = await carsController.createCar(5, 23, 10)
carsResponse = await carsController.getCars()
const newCarList2 = carsResponse.data.data
console.log(newCarList2)
expect(newCarList2.length).toBe(carList.length + 3)
expect(newCarList2.find((car) => car.id === newCarResponse2.data.data.id)).toBeDefined()
})




})