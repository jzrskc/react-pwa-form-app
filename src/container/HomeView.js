import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const HomeView = () => {
  const [names, setNames] = useState([]);
  console.log('names:', names)

  useEffect(() => {
    const localStorageData = localStorage.getItem('myForm');
    console.log('localStorageData:', localStorageData)

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
      <Link to="/form">Create Form</Link>

      <div className="collapsible-content">
        <div className="panel-group">
          <h4 className="orders-header">Clients</h4>
          {
            names.map((name, i) => (
              <div key={i} className="panel-heading">
                <h5>{name}</h5>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default HomeView;
