const Yup = require('yup');

const Factory = require('../models/Factory');
const Women = require('../models/Women'); 
const GenerateToken = require('../utils/GenerateToken');

class SessionController {
  async store(request, response) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    });

    if(!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation fails'});
    }

    const { email, password} = request.body;

    const factory = await Factory.findOne({ where: { email } });
    const women = await Women.findOne({ where: { email }});

    if (!factory && !women){
      return response.status(401).json( {error: 'user not found' } )
    }

    if(factory) {
      if(!(await factory.checkPassword(password))) {
        return response.status(401).json( {error: 'password does not match' });
      }

      const { id, name, nickname} = factory;

      return response.json({
        id,
        name,
        nickname,
        email,
        isFactory: true,
        token: GenerateToken(id),
      })
    }

    if(!(await women.checkPassword(password))) {
      return response.status(401).json( {error: 'password does not match' });
    }

    const { id, name, nickname } = women;

    return response.json({
      id,
      name,
      nickname,
      email,
      isFactory: false,
      token: GenerateToken(id)
    })
  }
}

module.exports = new SessionController;