const { Preorder, Phone } = require('./../models');

module.exports.getPreorders = async (req, res, next) => {
  try {
    const foundPreorders = await Preorder.findAll({
      raw: true,
      include: {
        model: Phone,
        attributes: ['brand', 'model', 'manufacturedYear'],
      },
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });
    res.status(200).send({ data: foundPreorders });
  } catch (error) {
    next(error);
  }
};