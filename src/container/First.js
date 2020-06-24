import React from 'react';
import { useForm } from 'react-hook-form';


const First = ({ updateForm }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    updateForm(data, 'first');
  };

  return (
    <>
      <h3>Step 1/2</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          defaultValue={'John'}
          placeholder="firstName"
          name="firstName"
          ref={register({ required: true })}
        />
        <input
          type="text"
          defaultValue={'Doe'}
          placeholder="lastName"
          name="lastName"
          ref={register({ required: true })}
        />

        <input type="submit" />
    </form>
    </>
  );
};

export default First;
