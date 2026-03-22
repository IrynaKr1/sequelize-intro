import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import defImage from './defaultImg.jpg';
import styles from './PhoneList.module.scss';
import { getPhonesThunk } from '../../store/slices/phonesSlice';

export const PhonesList = ({ phones, isFetching, error, getPhones }) => {
  useEffect(() => {
    getPhones();
  }, []);

  return (
    <>
      <BeatLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      {error && <div className={styles.error}>!!!ERROR!!!</div>}
      <ul className={styles.list}>
        {phones.map(p => (
          <li key={p.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                className={styles.image}
                src={
                  p.phone_image
                    ? `http://localhost:5000/images/${p.phone_image}`
                    : defImage
                }
                alt={`${p.brand} ${p.model}`}
              />
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>
                {p.brand} {p.model}
              </h3>
              <ul className={styles.specs}>
                <li>📅 {p.manufacturedYear.slice(0, 4)}</li>
                <li>💾 RAM: {p.ram} GB</li>
                <li>⚙️ CPU: {p.cpu} rdzeni</li>
                <li>📐 {p.screenSize}"</li>
              </ul>
              <span
                className={classNames(styles.nfc, { [styles.nfcNo]: !p.isNfc })}
              >
                {p.isNfc ? 'NFC' : 'No NFC'}
              </span>
            </div>

          </li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({
  getPhones: () => dispatch(getPhonesThunk()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
