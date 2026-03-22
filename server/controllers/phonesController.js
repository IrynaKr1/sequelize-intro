const _ = require('lodash');
const { Preorder, Phone } = require('../db/models');
const createHttpError = require('http-errors');

module.exports.createdPhone = async (req, res, next) => {
  const { body } = req;
  try {
    const createPhone = await Phone.create(body);
    if (!createPhone) {
      return res.status(400).send('Something went wrong');
    }

    const preparedPhone = _.omit(createPhone.get(), ['createdAt', 'updatedAt']);

    res.status(201).send({ data: preparedPhone });
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

module.exports.getPhoneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const foundPhoneById = await Phone.findByPk(id, {
      raw: true,
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    });

    if (!foundPhoneById) {
      return res.status(404).send('Phone Not found');
    }

    res.status(200).send({ data: foundPhoneById });
  } catch (error) {
    next(error);
  }
};
module.exports.updatePhoneById = async (req, res, next) => {
  const {
    body,
    params: { id },
  } = req;

  try {
    const [updatePhoneById, [updatedPhone]] = await Phone.update(body, {
      where: { id },
      raw: true,
      returning: true,
    });

    if (!updatePhoneById) {
      return res.status(404).send([{ status: 404, title: 'Phone Not found' }]);
    }

    const preparedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);

    res.status(200).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};
module.exports.deletePhoneById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const deletePhoneById = await Phone.destroy({
      where: { id },
    });

    if (!deletePhoneById) {
      return res.status(404).send('Phone not found');
    }

    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

module.exports.getPhonesPreorders = async (req, res, next) => {
  const { id } = req.params;
  try {
    const phone = await Phone.findByPk(id);
    if (!phone) {
      return res.status(404).send('Phone not found');
    }
    const preorders = await phone.getPreorders({
      raw: true,
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });

    res.status(200).send({ data: preorders });
  } catch (error) {
    next(error);
  }
};

module.exports.createPhonePreorder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const phone = await Phone.findByPk(id);
    if (!phone) {
      return res.status(404).json({ error: 'Phone not found' });
    }

    const preorder = await phone.createPreorder(body);

    const preparedPreorder = _.omit(preorder.get(), ['createdAt', 'updatedAt']);
    res.status(201).send({ data: preparedPreorder });
  } catch (error) {
    next(error);
  }
};

module.exports.updatePhoneImage = async (req, res, next) => {
  const {
    file,
    params: { id },
  } = req;

  try {
    if (!file) {
      return next(createHttpError(400, 'No file uploaded'));
    }

    const [upadtedPhoneCount, [updatedPhone]] = await Phone.update(
      { phone_image: file.filename },
      {
        where: { id },
        returning: true,
        raw: true,
      }
    );
    if (!upadtedPhoneCount) {
      return next(createHttpError(404, 'Phone not found'));
    }

    const preparedPhone = _.omit(updatedPhone, ['createdAt', 'updatedAt']);
    res.status(200).send({ data: preparedPhone });
  } catch (error) {
    next(error);
  }
};
