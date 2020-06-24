import React from 'react';


const Result = ({ form, saveForm }) => {
  const photo = require(`../assets/img/results.jpg`);

  return (
    <>
      <h3>Result</h3>
      <button type="button" className="uploadBtn" onClick={saveForm}>Save Form</button>

      <div className="content">
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>

      <img src={photo} alt="results_photo"/>
    </>
  );
};

export default Result;
