import React, {useState} from 'react';

import First from './First'
import Second from './Second'
import Result from './Result'


const App = () => {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    first: {},
    second: {},
  })

  const _updateForm = (data, key) => {
    setForm({ ...form, [key]: data });

    // save data in localStorage

    setStep(step + 1);
  };

  console.log('Online:', navigator.onLine);


  switch (step) {
    case 1:
      return <First updateForm={_updateForm} />;
    case 2:
      return <Second updateForm={_updateForm} />;
    case 3:
      return <Result form={form} />;

    default:
      return (
        <>
          <h1>404 Page</h1>
        </>
      );
  }
};

export default App;
