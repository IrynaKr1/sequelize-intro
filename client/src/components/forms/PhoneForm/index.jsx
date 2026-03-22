import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Input from '../Input';
import { PHONE_VALIDATION_SCHEMA } from './../../../utils/validationSchemas';
import styles from './PhoneForm.module.scss';
import { createPhoneThunk } from '../../../store/slices/phonesSlice';

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

function PhoneForm ({ createPhone }) {
  const handleSubmit = (values, { resetForm }) => {
    createPhone(values);
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
            label='Brand'
            type='text'
            placeholder='e.g. Samsung'
          />
          <Input
            name='model'
            label='Model'
            type='text'
            placeholder='e.g. Galaxy S24'
          />
          <Input
            name='manufacturedYear'
            label='Manufactured Year'
            type='number'
            placeholder='e.g. 2023'
          />
          <Input
            name='ram'
            label='RAM (GB)'
            type='number'
            placeholder='e.g. 8'
          />
          <Input
            name='cpu'
            label='CPU (cores)'
            type='number'
            placeholder='e.g. 8'
          />
          <Input
            name='screenSize'
            label='Screen Size (inches)'
            type='number'
            placeholder='e.g. 6.7'
            step='0.1'
          />
          <Input name='phone_image' label='Image' type='file' />

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
            Add Phone
          </button>
        </Form>
      )}
    </Formik>
  );
}

const mapDispatchToProps = dispatch => ({
  createPhone: data => dispatch(createPhoneThunk(data)),
});

export default connect(null, mapDispatchToProps)(PhoneForm);
