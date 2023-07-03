import bcrypt from  'bcrypt';
import dayjs from "dayjs";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from 'uuid';
import User from "../model/users";
import Profiles from "../model/profiles";


class UsersController {
    static async registerAUser(req, res) {
        const {username, email, password} = req.body;
        const existingUser = await User.findOne({ username});
        if (existingUser) {
            return res.status(400).json({message: 'username already exist'})
        }
        const existingEmail = await User.findOne({email})
        if (existingEmail) {
            return res.status(400).json({message: 'email already exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const encryptedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            userId: uuidv4(),
            username,
            password: encryptedPassword,
            isAdmin: false,
            email,
            createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
        });
        const createdUser = await User.create(newUser);

        const {userId, _id, createdAt} = createdUser;

        const newProfile = new Profiles({
            profileId: uuidv4(),
            createdAt: dayjs().format('YYYY-MM-DD h:mm:ss A'),
            userId: _id,

        })
        await Profiles.create(newProfile)

        const token = jwt.sign({
            userId,
            username,
            _id,
        }, process.env.TOKEN_SECRET);
        console.log(token, 'the token=============================>')
        return res.status(201).json({
            createdUser: {
                username: username,
                userId,
                createdAt,
            },
            token, message: 'user successfully created',

        });

    }

 }

export default UsersController


