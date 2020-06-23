import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import First from './First'
import Second from './Second'
import Result from './Result'

const initialForm = {
  first: {},
  second: {},
};


const FormView = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState(initialForm)

  const _updateForm = (data, key) => {
    setForm({ ...form, [key]: data });
    setStep(step + 1);
  };

  const _saveForm = () => {
    const dataInLocalStorage = localStorage.getItem('myForm');

    if (dataInLocalStorage) {
      const clients = JSON.parse(dataInLocalStorage);

      localStorage.setItem('myForm', JSON.stringify({...clients, [uuidv4()]: form}));
    } else {
      localStorage.setItem('myForm', JSON.stringify({
        [uuidv4()]: form,
      }));
    }

    _resetForm();
  };

  const _resetForm = () => {
    setForm(initialForm);
    setStep(1);
  };

  console.log('Online:', navigator.onLine);


  switch (step) {
    case 1:
      return <First updateForm={_updateForm} />;
    case 2:
      return <Second updateForm={_updateForm} />;
    case 3:
      return <Result form={form} saveForm={_saveForm} />;

    default:
      return (
        <>
          <h1>404 Page</h1>
        </>
      );
  }
};

export default FormView;
