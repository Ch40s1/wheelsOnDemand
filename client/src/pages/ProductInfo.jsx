import chrysler from '../img/chrysler-pacifica.png';
import ford from '../img/ford-f150.png';
import huracan from '../img/huracan-tecnica.png';
import toyota from '../img/toyota-camry.png';
import Van from '../img/chevyVan.png';
import Tesla from '../img/tesla.png'

import { Button, Card, ProgressBar } from 'react-bootstrap';
import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
// import Home from './Home';

const styles = {
  secondaryColor: {
    backgroundColor: 'gray'
  },
  progressBar: {
    width: '100px'
  }
}

const ProductInfo = () => {
  const vehicles = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Camry',
      year: 2023,
      price: 200,
      availability: true,
      image: toyota,
    },
    {
      id: 2,
      brand: 'Ford',
      model: 'F-150',
      year: 2021,
      price: 250,
      availability: true,
      image: ford,
    },
    {
      id: 3,
      brand: 'Chrysler',
      model: 'Pacifica',
      year: 2022,
      price: 100,
      availability: true,
      image: chrysler,
    },
    {
      id: 4,
      brand: 'Lamborghini',
      model: 'Huracan Tecnica',
      year: 2023,
      price: 1000,
      availability: false,
      image: huracan,
    },
    {
      id: 5,
      brand: "Chevy",
      model: 'Express',
      year: 2020,
      price: 200,
      availability: true,
      image: Van,
    },
    {
      id: 6,
      brand: "Tesla",
      model: 'Model S',
      year: 2020,
      price: 349,
      availability: true,
      image: Tesla,
    }
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const { pickUpLocation, pickUpTime, pickUpDate, dropOffDate } = location.state;

  const [vehicleData, setVehicleData] = useState(null)
  // const handleImageClick = (vehicle) => {
  //   setVehicleData((prevSelectedVehicle) => {
  //     if (prevSelectedVehicle === vehicle.id) {
  //       return null;
  //     } else {
  //       return vehicle.id;
  //     }
  //   });
  // };


  return (
    <>
      <div>
        <div className='d-flex col-12 text-white' style={styles.secondaryColor}>
          <div className='border-end col-3'>
          {/* px-4 ml-2  */}
            <h4 className=''>
              Pick up location: <br />{pickUpLocation}
            </h4>
          </div>
          <div className='border-end col-3'>
            <h4>
              Pick up time: <br />{pickUpTime}
            </h4>
          </div>
          <div className='border-end col-3'>
            <h4>
              Pick up date: <br />{pickUpDate}
            </h4>
          </div>
          <div className='col-3'>
            <h4>
              Drop off date: <br />{dropOffDate}
            </h4>
          </div>
        </div>
        <div className='d-flex justify-content-center '>
          <h1>Select from our list of vehicles</h1>
        </div>

        <ProgressBar now={50} />

        <div className='d-flex flex-wrap justify-content-center mt-4'>
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className='mx-3 px-5' style={styles.card}>
              <div className=''>
                <div className='d-flex justify-content-center'>
                  <img
                    src={vehicle.image}
                    alt={`${vehicle.brand} ${vehicle.model}`}
                    style={{ cursor: 'pointer', marginRight: '20px', width: '225px' }}
                  />
                </div>
                <div>
                  <h4 className='fw-semibold'>
                    {vehicle.brand} {vehicle.model}
                  </h4>
                  <div className='border border-end-0 border-start-0 mt-5 mb-5'>
                    <ul className='d-flex justify-content-around list-unstyled'>
                      <li>People: 5</li>
                      <li>Storage: 5⭐️</li>
                      <li>Gas: 230mi</li>
                    </ul>
                  </div>
                  <div>
                    <div className='d-flex justify-content-around'>
                      <p className='fs-6 fw-lighter text-body-tertiary'>
                        <span className='fw-semibold fs-2 text-black'>${vehicle.price} </span>
                        USD Per Week
                      </p>
                      <Button className='bg-warning text-black fw-bold ml-2'
                         onClick={() => {
                          navigate('/finish',
                            {
                              replace: true,
                              state: {
                                pickUpLocation: location.state.pickUpLocation,
                                pickUpTime: location.state.pickUpTime,
                                pickUpDate: location.state.pickUpDate,
                                dropOffDate: location.state.dropOffDate,
                                vehicleData: vehicle,
                              }
                            })
                        }}
                      >
                        Book Now!
                      </Button>
                    </div>
                  </div>
                </div>
              </div><hr />
            </Card>
          ))}
        </div>
      </div>
      {/* <Link to="/Finish">
        to finish
      </Link> */}
    </>
  );
};

export default ProductInfo;
