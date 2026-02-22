const { Phone } = require('./../models');

module.exports.createdPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createPhone = await Phone.create(body);
    if (!createPhone) {
      return res.status(400).send('Something went wrong');
    }

    res.status(201).send(createPhone);
  } catch (error) {
    next(error);
  }
};
module.exports.getPhone = async (req, res, next) => {};
module.exports.getPhoneById = async (req, res, next) => {};
module.exports.updatePhoneById = async (req, res, next) => {};
module.exports.deletePhoneById = async (req, res, next) => {};
