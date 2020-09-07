const Women = require('../models/Women');
const Factory = require('../models/Factory');

class ProfileController {
  async index(request, response) {
    let user = await Women.findByPk(request.userId);

    if(!user) {
      user = await Factory.findByPk(request.userId);
    }

    return response.json(user);
  }
}
 
module.exports = new ProfileController;