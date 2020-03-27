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

module.exports = router;
