import classNames from 'classnames';
import { Field } from 'formik';
import styles from './Input.module.scss';
 
function Input({ name, label, ...restProps }) {
  return (
    <Field name={name}>
      {({ field, meta }) => (
        <label className={styles.field}>
          <span className={styles.label}>{label}</span>
          <input
            className={classNames(styles.input, {
              [styles.valid]: !meta.error && meta.touched,
              [styles.invalid]: meta.error && meta.touched,
            })}
            {...restProps}
            {...field}
          />
          {meta.error && meta.touched && (
            <span className={styles.error}>{meta.error}</span>
          )}
        </label>
      )}
    </Field>
  );
}
 
export default Input;
 