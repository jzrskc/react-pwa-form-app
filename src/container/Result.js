import React from 'react';


const Result = ({ form }) => {
  return (
    <>
      <h3>Result</h3>
      <div className="content">
        <pre>{JSON.stringify(form, null, 2)}</pre>
      </div>
    </>
  );
};

export default Result;
