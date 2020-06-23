import React from 'react';


const Result = ({ form, saveForm }) => {
  return (
    <>
      <h3>Result</h3>
      <button type="button" onClick={saveForm}>Finish</button>

      <div className="content">
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </>
  );
};

export default Result;
