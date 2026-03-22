import * as yup from 'yup';

const CURRENT_YEAR = new Date().getFullYear();

const STRING_VALIDATION = yup.string().trim().required();

const NUMBER_VALIDATION = yup.number().required();

export const PHONE_VALIDATION_SCHEMA = yup.object({
  brand: STRING_VALIDATION.min(2).max(50),
  model: STRING_VALIDATION.min(1).max(50),
  manufacturedYear: NUMBER_VALIDATION.min(2000).max(CURRENT_YEAR),
  ram: NUMBER_VALIDATION.min(1).max(64),
  cpu: NUMBER_VALIDATION.min(1).max(16),
  screenSize: NUMBER_VALIDATION.min(3).max(8),
  isNfc: yup.boolean(),
  phone_image: yup.string(),
});
