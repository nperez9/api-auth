const router = require('express').Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');
const bcrypt = require('bcryptjs');

const registerUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});

const loginUserSchema = Joi.object({
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string().required(),
});

router.post('/register', async (req, res) => {
  const { name, password, email } = req.body;
  
  const { error } = registerUserSchema.validate(req.body);
  if (error) return res.status(400).json(error.details);

  const emailExists = await User.findOne({email});
  if (emailExists) return res.status(400).json({message: 'Error - User email already exists', code: 1001});

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.json({email: savedUser.email, name: savedUser.name});
  } catch (e) {
    res.status(400).json(e);
  }
});

router.post('/login', async (req, res) => {
  const { password, email } = req.body;
  
  const { error } = loginUserSchema.validate(req.body);
  if (error) return res.status(400).json(error.details);

  const user = await User.findOne({email});
  if (!user) return res.status(400).json({message: 'Invalid user', code: 1002});

  const passValid = await bcrypt.compare(password, user.password);
  if (!passValid) return res.status(400).json({message: 'Invalid password', code: 1003});

  res.json({message: 'Successfull login'});
});

module.exports = router;
