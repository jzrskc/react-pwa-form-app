import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomeView = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem('myForm');

    if (localStorageData) {
      const dataParsed= JSON.parse(localStorageData);
      const dataArray= [];

      Object.values(dataParsed).forEach((client) => {
        dataArray.push(`${client.first.firstName} ${client.first.lastName}`)
      });

      setNames(dataArray)
    }
  }, []);


  return (
    <>
      <h3>HomeView</h3>
      <Link to="/form" className="uploadBtn">Create Form</Link>

      <h4 className="header">Current Clients:</h4>
      {
        names.map((name, i) => (
          <div key={i} className="panel-heading">
            <h5>{name}</h5>
          </div>
        ))
      }
    </>
  );
};

export default HomeView;
