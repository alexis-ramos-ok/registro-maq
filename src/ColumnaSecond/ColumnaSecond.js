import React from 'react';
import { Container, Row, Col, Form, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './ColumnaSecond.css';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup.string().email('Email is not valid').required('Email is required'),
  contactNumber: yup.string().required('Contact Number is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
});

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props} style={{ backgroundColor: 'blue', fontSize: '12px' }}>
      {props.message}
    </Tooltip>
  );
  

const ColumnaSecond = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container className="columna-second-container">
      <h1 className="columna-second-title">Register Now</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col>
            <Form.Label>First Name</Form.Label>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip({ message: errors.firstName?.message })}
            >
              <Form.Control {...register('firstName')} className="custom-input" placeholder="First Name" />
            </OverlayTrigger>
          </Col>
          <Col>
            <Form.Label>Last Name</Form.Label>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip({ message: errors.lastName?.message })}
            >
              <Form.Control {...register('lastName')} className="custom-input" placeholder="Last Name" />
            </OverlayTrigger>
          </Col>
        </Row>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Email Address</Form.Label>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip({ message: errors.email?.message })}
          >
            <Form.Control {...register('email')} className="custom-input" type="email" placeholder="Your Email Address" />
          </OverlayTrigger>
        </Form.Group>
        <Form.Group controlId="formBasicContact">
          <Form.Label>Contact Number</Form.Label>
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip({ message: errors.contactNumber?.message })}
          >
            <Form.Control {...register('contactNumber')} className="custom-input" type="text" placeholder="Contact Number" />
          </OverlayTrigger>
        </Form.Group>
        <Row>
          <Col>
            <Form.Label>Password</Form.Label>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip({ message: errors.password?.message })}
            >
              <Form.Control {...register('password')} className="custom-input" type="password" placeholder="Password" />
            </OverlayTrigger>
          </Col>
          <Col>
            <Form.Label>Confirm Password</Form.Label>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip({ message: errors.confirmPassword?.message })}
            >
              <Form.Control {...register('confirmPassword')} className="custom-input" type="password" placeholder="Confirm Password" />
            </OverlayTrigger>
          </Col>
        </Row>
        <Button variant="success" type="submit">
          Register <FontAwesomeIcon icon={faPlay} />
        </Button>
      </Form>
    </Container>
  );
}

export default ColumnaSecond;
