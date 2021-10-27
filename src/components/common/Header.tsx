import React from 'react';
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';
import { BiSearch, BiUser } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AppState } from 'redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { FaSignOutAlt } from 'react-icons/fa';
import { logout } from 'redux/actionCreators/authActionCreators';

const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);
  return (
    <>
      <div className="header__component">
        <div className="top__container py-2 bg-light border-bottom">
          <Container className="d-flex align-items-center justify-content-between">
            <ul className="list-unstyled d-flex align-items-center gap-3">
              <li>
                <FiPhoneCall />
                <a href="tel:09698111666">09698111666</a>
              </li>
              <li>
                <HiOutlineMail />
                <a href="mailto:support@gvaly.com">support@gvaly.com</a>
              </li>
            </ul>
            <div className="">
              <BsPhone /> <a href="">Save big on Our app!</a>
            </div>
          </Container>
        </div>
      </div>
      <div className="middle-header">
        <Container>
          <div className="d-flex align-items-center gap-5 py-3">
            <Link to="/">
              <h1>Evaly</h1>
            </Link>
            <InputGroup className="">
              <FormControl
                className="border border-primary"
                placeholder="Search Here..."
                aria-label="Search Here..."
                aria-describedby="basic-addon2"
              />
              <Button variant="primary" id="button-addon2">
                <BiSearch className="text-white" />
              </Button>
            </InputGroup>
            <ul className="icon-list list-unstyled d-flex gap-2">
              <li>
                <Link to="/checkout">
                  <FiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <BiUser />
                </Link>
              </li>
              {data && (
                <li className="btn">
                  <FaSignOutAlt onClick={() => dispatch(logout())}/>
                </li>
              )}
            </ul>
          </div>
        </Container>
      </div>

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Categories</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">News feed</Nav.Link>
            <Nav.Link as={Link} to={'/dashboard'} >{data?.role === 'admin' ? 'Dashboard' : 'Merchant'}</Nav.Link>
            <Nav.Link href="#pricing">Help</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;


