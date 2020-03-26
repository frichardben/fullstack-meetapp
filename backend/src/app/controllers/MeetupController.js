import * as Yup from 'yup';
import { isBefore, parseISO } from 'date-fns';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

class MeetupController {
  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      description: Yup.string().required(),
      location: Yup.string().required(),
      date: Yup.date().required(),
      file_id: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    if (isBefore(parseISO(req.body.date), new Date())) {
      return res
        .status(400)
        .json({ error: `You can't create a meetup on a past date` });
    }

    try {
      const meetup = await Meetup.create({
        user_id: req.userId,
        ...req.body,
      });

      return res.json(meetup);
    } catch (error) {
      return res.json(error.message);
    }
  }

  async index(req, res) {
    try {
      const where = {};

      const meetups = await Meetup.findAll({
        where,
        include: [
          {
            model: User,
            as: 'organizer',
            attributes: ['id', 'name', 'email'],
          },
          {
            model: File,
            as: 'banner',
            attributes: ['name', 'path', 'url'],
          },
        ],
      });

      return res.json(meetups);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string(),
      description: Yup.string(),
      location: Yup.string(),
      date: Yup.date(),
      file_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const user_id = req.userId;

      const meetup = await Meetup.findByPk(req.params.id);

      if (meetup.user_id !== user_id) {
        return res.status(401).json({ error: 'Not authorized.' });
      }

      if (isBefore(parseISO(req.body.date), new Date())) {
        return res.status(400).json({ error: 'Meetup date invalid' });
      }

      await meetup.update(req.body);

      return res.json(meetup);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async delete(req, res) {
    try {
      const user_id = req.userId;

      const meetup = await Meetup.findByPk(req.params.id);

      if (meetup.user_id !== user_id) {
        return res.status(401).json({ error: 'Not authorized.' });
      }

      await meetup.destroy();

      return res.send();
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}

export default new MeetupController();
