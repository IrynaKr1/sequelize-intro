const { Phone } = require('./../models');

module.exports.createdPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createPhone = await Phone.create(body);
    if (!createPhone) {
      return res.status(400).send('Something went wrong');
    }

    res.status(201).send({ data: createPhone });
  } catch (error) {
    next(error);
  }
};
module.exports.getPhone = async (req, res, next) => {
  const { limit, offset } = req.pagination;

  try {
    const founPhones = await Phone.findAll({
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
      limit,
      offset,
      order: ['id'],
    });
    res.status(200).send({ data: founPhones });
  } catch (error) {
    next(error);
  }
};
module.exports.getPhoneById = async (req, res, next) => {};
module.exports.updatePhoneById = async (req, res, next) => {};
module.exports.deletePhoneById = async (req, res, next) => {};
