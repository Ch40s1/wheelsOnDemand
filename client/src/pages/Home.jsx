import vw from '../img/vw.png'

import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModalAlert from '../components/ModalAlert';
// import Auth from '../utils/auth';


const style = {
  heroConatiner: {
    minHeight: '500px',
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)), url(${vw})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    zIndex: 1,
    alt: 'Car driving',
  },
  whiteConatiner: {
    backgroundColor: 'white'
  },
  accentBtn: {
    backgroundColor: '#fc0',
    height: '4rem',
    color: 'black',
    fontWeight: '800'
  },
  font: {
    fontFamily: 'Roboto, sans-seriff'
  },
  cardContainer: {
    border: '1px solid #c3c3c3',
    boxShadow: '0 1px 3px rgba(0,0,0,.2)',
    height: '10rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }

}

const Home = () => {
  // const isLoggedIn = Auth.loggedIn();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    pickUpLocation: '',
    zipCode: '',
    pickUpTime: '',
    pickUpDate: '',
    dropOffDate: '',
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const generateTimeOptions = () => {
    // make a option array that we can chooese from
    const options = ["9:00 am", '10:00 am', '11:00 am', "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm ", "5:00 pm"];
    // the options for the select input form need to be a array
    const timeOptions = [];

    // loop if i is less than the array length and add the value of the array index to the timeoptons array
    for (let i = 0; i < options.length; i++) {
      const formattedHour = `${options[i]}`;
      // push the options into the array
      timeOptions.push(
        <option key={formattedHour} value={formattedHour}>
          {formattedHour}
        </option>
      );
    }

    //return the array to the form
    return timeOptions;
  };


  return (
    <>
      <div className="d-flex flex-column align-items-center col-12 justify-center" style={style.heroConatiner}>
        {/* <Button variant="primary" onClick={handleOpenModal}>
        Open Modal
      </Button> */}

        <ModalAlert
          show={showModal}
          handleClose={handleClose}
          // title="Oops. 😅"
          bodyContent="Please fill out all fields."
        />

        <div className='d-flex justify-content-start col-10 col-md-8 col-md-12 text-white'>
          <h1 style={style.font}>Journey with us!</h1>
        </div>
        <div className='border px-2 rounded col-10 col-md-12 bg-white'>
          <div className='ml-5'>
            <h3 style={style.font}>Reserve A Vehicle</h3>
          </div>
          <div className='d-flex mb-5'>
            <Form className="d-block d-md-flex justify-content-around align-items-center">

              <Form.Group controlId="formLocation" className=''>
                <Form.Label>Pick-up location</Form.Label>
                <Form.Control
                  as="select"
                  name="pickUpLocation"
                  value={formData.pickUpLocation}
                  onChange={(e) => handleChange('pickUpLocation', e.target.value)}>
                  <option>Select location</option>
                  <option value='TX'>Texas</option>
                  <option value="LA">Louisiana</option>
                  <option value="AR">Arkansas</option>
                  <option value="NM">New Mexico</option>
                  <option value="OK">Oklahoma</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formDate" className=''>
                <Form.Label>Pick-up Date</Form.Label>
                <Form.Control
                  type="date"
                  name="pickUpDate"
                  onChange={(e) => handleChange('pickUpDate', e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formTime">
                <Form.Label>Pick-up Time</Form.Label>
                <Form.Control
                  as="select"
                  name="pickUpTime"
                  onChange={(e) => handleChange('pickUpTime', e.target.value)}>
                  <option value="">Select time</option>
                  {generateTimeOptions()} {/* Generate options from 9 AM to 5 PM */}
                </Form.Control>
              </Form.Group>


              <Form.Group controlId="formDropOffDate">
                <Form.Label>Drop-off date</Form.Label>
                <Form.Control
                  type="date"
                  name="dropOffDate"
                  onChange={(e) => handleChange('dropOffDate', e.target.value)}
                />
              </Form.Group>

              <Button
                style={style.accentBtn}
                onClick={() => {
                  const { pickUpLocation, pickUpDate, pickUpTime, dropOffDate } = formData;

                  // Check if any of the required fields are empty
                  if (!pickUpLocation || !pickUpDate || !pickUpTime || !dropOffDate) {
                    handleOpenModal(); // Display the modal
                  } else {
                    // All fields are filled, proceed with navigation
                    navigate('/product-info', {
                      replace: true,
                      state: {
                        pickUpLocation,
                        zipCode: formData.zipCode,
                        pickUpTime,
                        pickUpDate,
                        dropOffDate,
                      },
                    });
                  }
                }}
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
