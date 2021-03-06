const Yup = require('yup');

const Women = require('../models/Women');
const GenerateToken = require('../utils/GenerateToken');

class WomenController {
  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      nickname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      description: Yup.string(),
      cpf: Yup.number().required(),
      linkForLinkedin: Yup.string(),
      experiences: Yup.array(),
      agreeToTerms: Yup.boolean().required(),
      apply: Yup.boolean()
    });
 
    if(!(await schema.isValid(request.body))){
      return response.status(400).json({ error: 'Validation fails'});
    }
 
    const WomenExistsWithEmail = await Women.findOne({ where: {email: request.body.email} });
    const WomenExistsWithCPF = await Women.findOne({ where: {cpf: request.body.cpf} });
 
    if (WomenExistsWithEmail || WomenExistsWithCPF) {
      return response.status(400).json({error: 'Register already exists'});
    }
 
    const {
      id,
      name,
      nickname,
      email,
      cpf,
      agreeToTerms
    } = await Women.create(request.body);

    const token = await GenerateToken(id);
 
    return response.json({
      id,
      name,
      nickname,
      email,
      cpf,
      agreeToTerms,
      token,
      isFactory: false
    });
  }
}
 
module.exports = new WomenController;