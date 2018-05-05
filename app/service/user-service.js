const Users = require('../models/users');

class UserService {
    async addUser() {
        const userDao = new Users({
            name: 'test',
            email: '123@13.com',
            password: 'sda'
        });
        return userDao.saveAsync();
    }
}

module.exports=new UserService();
