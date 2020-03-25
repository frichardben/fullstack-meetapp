import Meetup from '../models/Meetup';

class MeetupController {
  async store(req, res) {
    try {
      const meetup = await Meetup.create({
        user_id: req.userId,
        ...req.body,
      });

      return res.status(201).json(meetup);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default new MeetupController();
