import React from 'react';

import PhoneForm from '../../components/forms/PhoneForm';
import PhonesList from '../../components/PhonesList';

function PhonePage () {
  return (
    <section>
      <PhoneForm />
      <PhonesList />
    </section>
  );
}

export default PhonePage;
