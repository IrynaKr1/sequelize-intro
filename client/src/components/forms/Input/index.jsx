import classNames from 'classnames';
import { Field } from 'formik';
import styles from './Input.module.scss';

function Input({ name, label, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, meta, form }) => {
        const isFile = restProps.type === 'file';

        const inputProps = isFile
          ? {
              // file input jest uncontrolled — NIE przekazujemy value z Formika
              // onChange ręcznie zapisuje File object do Formika
              onChange: e => form.setFieldValue(name, e.target.files[0]),
              onBlur: field.onBlur,
            }
          : {
              // zwykłe inputy — standardowy field z Formika
              ...field,
              ...restProps,
            };

        return (
          <label className={styles.field}>
            <span className={styles.label}>{label}</span>
            <input
              className={classNames(styles.input, {
                [styles.valid]: !meta.error && meta.touched,
                [styles.invalid]: meta.error && meta.touched,
              })}
              {...(isFile ? restProps : {})}
              {...inputProps}
            />
            {meta.error && meta.touched && (
              <span className={styles.error}>{meta.error}</span>
            )}
          </label>
        );
      }}
    </Field>
  );
}

export default Input;
 