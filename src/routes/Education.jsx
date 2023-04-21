import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import grad from '../images/Grad-1.jpg'

function Education() {

  return (
    <div>
      <Row>
        <Col className='education-background'>
        </Col>
        <Col className='education-text'>
          Education
          <p>
            University of Calgary<br/>
            Bsc. Electrical Engineering<br/>
            Graduated with Distinction
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default Education