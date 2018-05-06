const Pet = require('../models/pets');

class PetService {
  async create() {
    return Pet.create({
      username: 'haha',
      birthday: new Date()
    });
  }
}

module.exports = new PetService();
