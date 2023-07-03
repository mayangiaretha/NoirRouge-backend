import dayjs from 'dayjs';
import Profiles from '../model/profiles';
import User from '../model/users';

class ProfilesController {
  static async getAProfile(req, res) {
    const { _id } = req.params;
    const oneProfile = await Profiles.findOne(_id).populate({
      path: 'userId',
      model: 'User',
    });
    if (!oneProfile) {
      return res
        .status(400)
        .json({ message: 'this profile does not exist please check id' });
    }
    return res.profile({ profile: oneProfile });
  }
}

export default ProfilesController;
