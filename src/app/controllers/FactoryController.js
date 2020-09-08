const Yup = require('yup');

const Factory = require('../models/Factory');
const Women = require('../models/Women'); 
const GenerateToken = require('../utils/GenerateToken');

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
 
    const FactoryExistsWithCNPJ = await Factory.findOne({ 
      where: {
        cnpj: request.body.cnpj
      } 
    });

    const FactoryExistsWithEmail = await Factory.findOne({ 
      where: {
        email: request.body.email
      } 
    });
 
    if (FactoryExistsWithCNPJ) {
      return response.status(400).json({error: 'Factory already exists with that CNPJ'});
    }

    const womenAlreadyRegisteredWithEmail = await Women.findOne({ where: {email: request.body.email} });

    if (womenAlreadyRegisteredWithEmail || FactoryExistsWithEmail) {
      return response.status(400).json({error: 'User already exists with that email'});
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

    const token = await GenerateToken(id);
 
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
      hire,
      token,
      isFactory: true
    });
  }
}
 
module.exports = new FactoryController;