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

// test('User can get all cars', async () => {
// const carsResponse = await carsController.getCars()
// expect(carsResponse.status).toBe(200)
// })

////////////////Тесты для проверки что юзер может создавать все машины и модели////////////

test('User can create ALL AUDI models', async () => {
let carsResponse = await carsController.getCars()
const carList = [...carsResponse.data.data]


function modelsAudi() {
    for (let i = 1; i <= 5; i++) {
        carsController.createCar(1, i, 10)
    }
}
modelsAudi();
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
await delay(1000);
carsResponse = await carsController.getCars()
const newCarList = carsResponse.data.data

expect(newCarList.length).toBe(carList.length + 5)
//expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined()

})

test('User can create ALL BMW models', async () => {
    let carsResponse2 = await carsController.getCars()
    const carList2 = [...carsResponse2.data.data]
    
    
    function modelsBMW() {
        for (let i = 6; i <= 10; i++) {
            carsController.createCar(2, i, 10)
        }
    }
    modelsBMW();
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1000);
    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    
    expect(newCarList.length).toBe(carList2.length +5)
    //expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined()
})

test('User can create ALL FORD models', async () => {
    let carsResponse = await carsController.getCars()
    const carList = [...carsResponse.data.data]
    
    
    function modelsFORD() {
        for (let i = 11; i <= 15; i++) {
            carsController.createCar(3, i, 10)
        }
    }
    modelsFORD();
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1000);
    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    
    expect(newCarList.length).toBe(carList.length + 5)
    //expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined()
})

test('User can create ALL PORCHE models', async () => {
    let carsResponse = await carsController.getCars()
    const carList = [...carsResponse.data.data]
    
    
    function modelsPORCHE() {
        for (let i = 16; i <= 18; i++) {
            carsController.createCar(4, i, 10)
        }
    }
    modelsPORCHE();
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1000);
    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    
    expect(newCarList.length).toBe(carList.length + 3)
    //expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined()
})

test('User can create ALL FIAT models', async () => {
    let carsResponse = await carsController.getCars()
    const carList = [...carsResponse.data.data]
    
    
    function modelsFIAT() {
        for (let i = 19; i <= 23; i++) {
            carsController.createCar(5, i, 10)
        }
    }
    modelsFIAT();
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1000);
    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    
    expect(newCarList.length).toBe(carList.length + 5)
    //expect(newCarList.find((car) => car.id === newCarResponse.data.data.id)).toBeDefined()
})

/////////////////Отрицательные тесты///////////////////////

test('User cannot create AUDI brand with BMW models', async () => {
    let carsResponse = await carsController.getCars()
    const carList = [...carsResponse.data.data]
    
    
    function modelsAudi() {
        for (let i = 6; i <= 10; i++) {
            carsController.createCar(1, i, 10)
        }
    }
    modelsAudi();
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    await delay(1000);
    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    expect(newCarList.length).toBe(carList.length)

})

test('User cannot create empty item', async () => {
    let carsResponse = await carsController.getCars()
    const carList = [...carsResponse.data.data]
    await carsController.createCar()
    

    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    expect(newCarList.length).toBe(carList.length)

})

test('User cannot create a car with negative mileage', async () => {
    let carsResponse = await carsController.getCars()
    const carList = [...carsResponse.data.data]
    await carsController.createCar(1, 1, -10)
    

    carsResponse = await carsController.getCars()
    const newCarList = carsResponse.data.data
    
    expect(newCarList.length).toBe(carList.length)

})

})
