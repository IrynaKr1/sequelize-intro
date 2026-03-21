import { Formik, Form, Field } from 'formik';
import Input from '../Input';
import { PHONE_VALIDATION_SCHEMA } from './../../../utils/validationSchemas';
import styles from './PhoneForm.module.scss';

const INITIAL_VALUES = {
  brand: '',
  model: '',
  manufacturedYear: '',
  ram: '',
  cpu: '',
  screenSize: '',
  isNfc: false,
  phone_image: '',
};

function PhoneForm () {
  const handleSubmit = (values, { resetForm }) => {
    console.log('Submitted:', values);
    // TODO: dispatch(createPhoneThunk(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={PHONE_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form} noValidate>
          <h2 className={styles.title}>Add phone</h2>

          <Input
            name='brand'
            label='Marka'
            type='text'
            placeholder='np. Samsung'
          />
          <Input
            name='model'
            label='Model'
            type='text'
            placeholder='np. Galaxy S24'
          />
          <Input
            name='manufacturedYear'
            label='Rok produkcji'
            type='number'
            placeholder='np. 2023'
          />
          <Input
            name='ram'
            label='RAM (GB)'
            type='number'
            placeholder='np. 8'
          />
          <Input
            name='cpu'
            label='CPU (rdzenie)'
            type='number'
            placeholder='np. 8'
          />
          <Input
            name='screenSize'
            label='Rozmiar ekranu (cale)'
            type='number'
            placeholder='np. 6.7'
            step='0.1'
          />
          <Input
            name='phone_image'
            label='Zdjęcie (URL)'
            type='url'
            placeholder='https://...'
          />

          <div className={styles.checkboxField}>
            <Field
              type='checkbox'
              id='isNfc'
              name='isNfc'
              className={styles.checkbox}
            />
            <label htmlFor='isNfc' className={styles.checkboxLabel}>
              NFC
            </label>
          </div>

          <button
            type='submit'
            className={styles.button}
            disabled={isSubmitting}
          >
            Dodaj telefon
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default PhoneForm;
