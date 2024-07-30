const {UsersController} = require('../src/controllers/UsersController.js')


const usersController = new UsersController()

test('Get current user profile', async () => {
    await usersController.login()
    const sid = usersController.getSessionID()
    console.log('SID', sid)
    const res = await usersController.getUserProfile()
    expect(res.status).toBe(200)
    expect(res.data.data.name).toBe('AntonyBaff')
})