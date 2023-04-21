import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Card({projectInfo}) {

    return(
      <div className="proj-card">
        <Row>
          <Image className='proj-image' src={projectInfo.image}/>
          <Col className='proj-desc'>
            <h3>{projectInfo.name}</h3>
            <p >
              {projectInfo.description}
            </p>
          </Col>
        </Row>
      </div>
    );
  }

export default Card