import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="O mnie" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Z wyksztłcenia jestem inżynierem matematyki, na co dzień pracuję jako nauczyciel i bardzo cenię sobie kontakt z młodzieżą. W tym momencie programowanie jest dla mnie raczej pasją, ale cóż od tego wszystko się zaczyna. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Programowanie rozumiem przede wszystkim jako narzędzie do realizacji celów. Dla mnie takim celem jest zbudownanie platformy edukacyjnej do nauki matematyki z prawdziwego zdarzenia. Platforma ta mogłaby ułatwić życie ucznia dzięki animacją trudnych zaganień oraz ułatwić życie nauczyciela dzieki zautomatyzowaniu prac domowych.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Kliknij poniżej aby zobaczyć CV.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      CV
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
