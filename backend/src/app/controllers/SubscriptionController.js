import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import User from '../models/User';
import Meetup from '../models/Meetup';

import Mail from '../../lib/Mail';

class SubscriptionController {
  async store(req, res) {
    try {
      const user = await User.findByPk(req.userId);
      const meetup = await Meetup.findByPk(req.params.id, {
        include: [
          {
            model: User,
            as: 'organizer',
          },
        ],
      });

      if (meetup.user_id === req.userId) {
        return res
          .status(400)
          .json({ error: "Can't subscribe to you own meetups." });
      }

      if (meetup.past) {
        return res
          .status(400)
          .json({ error: "Can't subscribe to past meetups" });
      }

      const checkDate = await Subscription.findOne({
        where: {
          user_id: user.id,
        },
        include: [
          {
            model: Meetup,
            required: true,
            where: {
              date: meetup.date,
            },
          },
        ],
      });

      if (checkDate) {
        return res
          .status(400)
          .json({ error: "Can't subscribe to two meetups at the same time" });
      }

      const subscribe = await Subscription.create({
        user_id: user.id,
        meetup_id: meetup.id,
      });

      await Mail.sendMail({
        to: `${meetup.organizer.name} <${meetup.organizer.email}>`,
        subject: 'Nova inscrição',
        template: 'subscription',
        context: {
          organizer: meetup.organizer.name,
          meetup: meetup.title,
          user: user.name,
          email: user.email,
        },
      });

      return res.json(subscribe);
    } catch (error) {
      return res.json(error.message);
    }
  }

  async index(req, res) {
    try {
      const subscription = await Subscription.findAll({
        where: {
          user_id: req.userId,
        },
        include: [
          {
            model: Meetup,
            where: {
              date: {
                [Op.gt]: new Date(),
              },
            },
            required: true,
          },
        ],
        order: [[Meetup, 'date']],
      });

      return res.json(subscription);
    } catch (error) {
      return res.status(401).json(error.message);
    }
  }
}

export default new SubscriptionController();
