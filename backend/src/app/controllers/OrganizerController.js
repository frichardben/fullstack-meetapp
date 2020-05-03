import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class OrganizerController {
  async index(req, res) {
    const meetup = await Meetup.findAll({
      where: {
        user_id: req.userId,
      },
    });

    return res.json(meetup);
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const meetup = await Meetup.findByPk(id, {
        include: [
          {
            model: File,
            as: 'banner',
            attributes: ['name', 'url', 'path'],
          },
          {
            model: User,
            as: 'organizer',
            attributes: ['id', 'name', 'email'],
          },
        ],
      });

      return res.json(meetup);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new OrganizerController();
