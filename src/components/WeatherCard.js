import React, { useEffect, useState } from 'react'
import axiosInstance from '../api/axiosInstance';

function WeatherCard({city}) {

  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    const params = {
      'key': '71554ad27170463bbb5125608243012',
      'q': city
    };

    axiosInstance
    .get('', {params})
    .then((response) => {
      setData(response.data);
      console.log(response);
      setLoading(false);
    })
    .catch((err)=>{
      setError(err.message);
      console.log(err);
      setLoading(false);
    })
  }, []);
  if(loading){
   return  <h3>Loading...</h3>
  }
  if(error){
    return <h3>Something went wrong: {error}</h3>
  }
    const {location, current} = data;
   return (
    <div className="container my-4">
      <div className="card text-center shadow-lg">
        <div className="card-header bg-primary text-warning">
          <h4>Weather in {location.name}, {location.region}, {location.country}</h4>
          <small>Local Time: {location.localtime.slice(11)}</small>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={current.condition.icon}
                alt={current.condition.text}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6">
              <h3 className="text-primary">
                {current.temp_c}°C
              </h3>
              <p className="text-muted">{current.condition.text}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <p>
                <strong>Humidity:</strong> {current.humidity}%
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <strong>Wind:</strong> {current.wind_kph} km/h
              </p>
            </div>
            <div className="col-md-4">
              <p>
                <strong>Feels Like:</strong> {current.feelslike_c}°C
              </p>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">
          Last Updated: {current.last_updated.slice(11)}
        </div>
      </div>
    </div>
  );
}

export default WeatherCard
