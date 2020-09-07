import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import Factory from '../models/Factory';
import Women from '../models/Women';

import AuthConfig from '../../config/auth';

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

      const { id, name} = factory;

      return response.json({
        id,
        name,
        email,
        isFactory: true,
        token: jwt.sign({ id }, AuthConfig.secret, {
          expiresIn: AuthConfig.expiresIn
        }),
      })
    }

    if(!(await women.checkPassword(password))) {
      return response.status(401).json( {error: 'password does not match' });
    }

    const { id, name } = women;

    return response.json({
      id,
      name,
      email,
      isFactory: false,
      token: jwt.sign({ id }, AuthConfig.secret, {
        expiresIn: AuthConfig.expiresIn
      }),
    })
  }
}

export default new SessionController;