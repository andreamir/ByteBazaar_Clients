import { Container, Row, Col } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';



function Footer() { 
return (
  <footer className='bg-light text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span>Get connected with us on social networks:</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <Icon.Facebook />
        </a>
        <a href='' className='me-4 text-reset'>
        <Icon.Twitter />
        </a>
        <a href='' className='me-4 text-reset'>
          <Icon.Instagram />
        </a>
        <a href='' className='me-4 text-reset'>
          <Icon.Linkedin />
        </a>
        <a href='' className='me-4 text-reset'>
          <Icon.Github />
        </a>
      </div>
    </section>

    <section className=''>
      <Container className='text-center text-md-start mt-5'>
        <Row className='mt-3'>
          <Col md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
            👾 Byte Bazaar
            </h6>
            <p>
            Embark on epic adventures with our curated collection of thrilling video games. Latest releases and exclusive titles. Level up your play, only at our online gaming haven!
            </p>
          </Col>

          <Col md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Platforms</h6>
            <p>
              <a href='#!' className='text-reset'>
                PC
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Playstation 6
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Xbox
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Wii
              </a>
            </p>
          </Col>

          <Col md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Latest Releases</h6>
            <p>
              <a href='#!' className='text-reset'>
                Strategy
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Sports
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Action
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Multiplayer
              </a>
            </p>
          </Col>

          <Col md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <Icon.HouseDoor /> {" "}
              Valencia, CP 46001
            </p>
            <p>
              <Icon.Mailbox />{" "}
              beawsome@bytebazaar.com
            </p>
            <p>
              <Icon.Phone />{" "} +34 654 654 660
            </p>
          </Col>
        </Row>
      </Container>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2023 Copyright:{" "}
      <a className='text-reset fw-bold' href='https://bytebazaar.com/'>Bytebazaar.com</a>
    </div>
  </footer>
);
}

export default Footer
