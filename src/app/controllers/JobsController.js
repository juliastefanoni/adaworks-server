import * as Yup from 'yup';
import Jobs from '../models/Jobs';
import Factory from '../models/Factory';
 
class JobsController {
  async index(request, response) {
    const { page = 1} = request.query;

    const jobs = await Jobs.findAll({
      order: [
        'created_at'
      ],
      limit: 20,
      offset: (page - 1) * 20,
      include: [
        {
          model: Factory,
          attributes: ['id', 'name']
        }
      ]
    });

    return response.json(jobs);
  }
  async store(request, response) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      localization: Yup.string().required(),
      role: Yup.string().required(),
      remuneration: Yup.number().required(),
      experience: Yup.string().required(),
      factory_id: Yup.number().required(),
      occupationArea: Yup.string(),
    });

    if(!(await schema.isValid(request.body))){
      return response.status(400).json({ error: 'Validation fails'});
    }

    const factoryExists = await Factory.findOne({ where: {id: request.body.factory_id} });

    if(!factoryExists) {
      return response.status(400).json({error: 'Factory not exists'});
    }
 
    const {
      id,
      title,
      description,
      localization,
      role,
      remuneration,
      experience,
      factory_id,
      occupationArea,
    } = await Jobs.create(request.body);
 
    return response.json({
      id,
      title,
      description,
      localization,
      role,
      remuneration,
      experience,
      factory_id,
      occupationArea
    });
  }
}
 
export default new JobsController();