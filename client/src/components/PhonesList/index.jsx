import { connect } from 'react-redux';
import { BeatLoader } from 'react-spinners';
import defImage from './defaultImg.jpg';
import { useEffect, useState } from 'react';

export const PhonesList = ({ isFetching, error }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/phones')
      .then(res => res.json())
      .then(data => setPhones(data.data))
      .catch(err => console.log('err', err));
  }, []);

  return (
    <>
      <BeatLoader loading={isFetching} />
      {error && <div>!!!ERROR!!!</div>}
      <ul>
        {phones.map(p => (
          <li key={p.id}>{JSON.stringify(p)}</li>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = ({ phonesData }) => phonesData;

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PhonesList);
