import * as Yup from 'yup';
import Factory from '../models/Factory';
import Women from '../models/Women';
 
class FactoryController {
  async index(request, response) {
    const { nickname } = request.query;

    if(nickname) {
      const factory = await Factory.findOne({
        where: { nickname },
        attributes: [
          'id',
          'nickname',
          'cnpj',
          'factoryName',
          'occupationArea',
          'description',
          'companyPolices',
          'linkForLinkedin',
          'agreeToTerms',
          'authorization',
          'hire'
        ]
      })

      return response.json(factory);
    }

    const factories = await Factory.findAll({
      order: [ 'nickname' ],
      attributes: [
        'id',
        'nickname',
        'factoryName',
      ]
    });

    return response.json(factories);
  }
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      nickname: Yup.string().required(),
      role: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      cnpj: Yup.number().required(),
      factoryName: Yup.string().required(),
      occupationArea: Yup.string(),
      description: Yup.string(),
      companyPolices: Yup.array(),
      linkForLinkedin: Yup.string(),
      agreeToTerms: Yup.boolean().required(),
      authorization: Yup.boolean().required(),
      hire: Yup.boolean(),
    });
 
    if(!(await schema.isValid(request.body))){
      return response.status(400).json({ error: 'Validation fails'});
    }
 
    const FactoryExists = await Factory.findOne({ where: {cnpj: request.body.cnpj} });
 
    if (FactoryExists) {
      return response.status(400).json({error: 'Factory already exists'});
    }

    const womenAlreadyRegistered = await Women.findOne({ where: {email: request.body.email} });

    if (womenAlreadyRegistered) {
      return response.status(400).json({error: 'User already exists'});
    }
 
    const {
      id,
      name,
      nickname,
      email,
      role,
      cnpj,
      factoryName,
      agreeToTerms,
      authorization,
      hire
    } = await Factory.create(request.body);
 
    return response.json({
      id,
      name,
      nickname,
      email,
      role,
      cnpj,
      factoryName,
      agreeToTerms,
      authorization,
      hire
    });
  }
}
 
export default new FactoryController();