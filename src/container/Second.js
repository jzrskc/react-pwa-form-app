import React from 'react';
import { useForm } from 'react-hook-form';


const Second = ({ updateForm }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    updateForm(data, 'second');
  };

  return (
    <>
      <h3>Step 2/2</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="number"
          defaultValue={23}
          placeholder="are"
          name="are"
          ref={register}
        />
        <input
          type="text"
          defaultValue={'gaming'}
          placeholder="hobby"
          name="hobby"
          ref={register}
        />

        <input type="submit" />
    </form>
    </>
  );
};

export default Second;
