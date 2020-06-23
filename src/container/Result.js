import React from 'react';
import { Link } from 'react-router-dom';


const Result = ({ form, saveForm }) => {
  return (
    <>
      <h3>Result</h3>
      <button type="button" onClick={saveForm}>Save Form</button>
      <Link to="/">Finish</Link>

      <div className="content">
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </>
  );
};

export default Result;
