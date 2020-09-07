import * as Yup from 'yup';
import Women from '../models/Women';
 
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
 
    const WomenExists = await Women.findOne({ where: {email: request.body.email} });
 
    if (WomenExists) {
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
 
    return response.json({
      id,
      name,
      nickname,
      email,
      cpf,
      agreeToTerms
    });
  }
}
 
export default new WomenController();