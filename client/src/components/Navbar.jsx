import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import Auth from '../utils/auth';
import { GET_ME } from '../utils/queries';
import { useQuery } from '@apollo/client';
import tireIcon from '../img/tireIcon.png'


const styles = {
  logoSize: {
    // fontSize: '2rem',
    fontFamily: 'Roboto Condensed',
    borderBottom: '6px solid #fc0',
    opacity: '10',
    height: '53px'
  },
  fontColor: {
    color: 'black',
    textDecoration: 'underline'
  },
  secondaryContainer: {
    backgroundColor: 'rgb(247, 139, 0)',
    color: 'rgb(255, 255, 255)',
    padding: '1rem',
  },
  font: {
    fontFamily: 'Roboto, sans-seriff'
  },
  icon: {
    marginBottom: "10px"
  },
  loginBox: {
    backgroundColor: '#fc0',
    color: 'black',
    borderRadius: '10px',
    height: '39px'

  }
}


export default function AppNavbar() {
  const expand = 'sm';

  const { data } = useQuery(GET_ME);
  const userData = data?.me || {};

  return (
    <>
      <Navbar key={expand} expand={expand} style={styles.border}>
        <Container fluid className=' mr-5 ml-5'>
          <Navbar.Brand href="/" style={styles.logoSize}>
            Wheels
            <span>
              <img
              src={tireIcon}
              height={39}
              style={styles.icon}
              />
            </span>
            nDemand
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Navigate
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/" className="link " style={styles.fontColor}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="link" activeClassName="active" style={styles.fontColor}>
                  Contact us
                </Nav.Link>

                {Auth.loggedIn() ? (
                  <>
                    <Nav.Item disabled className='d-flex align-items-center'>
                      Hello, {userData.username}!
                    </Nav.Item>
                    <div className=''>
                      <Nav.Link as={Link} onClick={Auth.logout} to="/logout" className="link" activeClassName="active" style={styles.fontColor}>
                        Logout
                      </Nav.Link>
                    </div>
                  </>
                ) : (
                  <Nav.Link as={Link} to="/login" className="link" activeClassName="active" style={styles.loginBox}>
                    Login/Sign up
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <div className='d-flex'>
        <div className='col-4 border border-black d-flex justify-content-center align-items-center' style={styles.secondaryContainer}>
          <h4 style={styles.font}>
            Deals
          </h4>
        </div>
        <div className='col-4 border border-black  d-flex justify-content-center align-items-center' style={styles.secondaryContainer}>
          <h4 style={styles.font}>
            Cars & Services
          </h4>
        </div>
        <div className='col-4 border border-black  d-flex justify-content-center align-items-center' style={styles.secondaryContainer}>
          <h4 style={styles.font}>
            Locations
          </h4>
        </div>
      </div> */}

    </>
  )
}
