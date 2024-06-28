import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import videodata from '../Home/Homedata';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import speedometer from '../../assets/speedometer.png';
import VisibilitySensor from 'react-visibility-sensor';

function Home() {
    const [videos, setVideos] = useState([]);
    const [videoIndex, setVideoIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionDirection, setTransitionDirection] = useState('');
    const [isContentTransitioning, setIsContentTransitioning] = useState(false);
    const [isSpekVisible, setIsSpekVisible] = useState(false);

    useEffect(() => {
        setVideos(videodata());
    }, []);

    const handleNextVideo = () => {
        setIsTransitioning(true);
        setIsContentTransitioning(true);
        setTransitionDirection('left');
        setTimeout(() => {
            setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
            setIsTransitioning(false);
        }, 500); 
        setTimeout(() => {
            setIsContentTransitioning(false);
        }, 1000);
    };

    const handlePrevVideo = () => {
        setIsTransitioning(true);
        setIsContentTransitioning(true);
        setTransitionDirection('right');
        setTimeout(() => {
            setVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
            setIsTransitioning(false);
        }, 300); 
        setTimeout(() => {
            setIsContentTransitioning(false);
        }, 1000); 
    };

    const currentVideo = videos[videoIndex];

    const onSpekVisibleChange = (isVisible) => {
        if (isVisible) {
            setIsSpekVisible(true);
        }
    };

    return (
        <section className="video-background-container">
            {videos.length > 0 && currentVideo && (
                <div className="video-overlay">
                    <video className="video-background" key={currentVideo.video} autoPlay loop muted>
                        <source src={currentVideo.video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
            <Container fluid className="home-section" id="home">
                {currentVideo && (
                    <Container className="home-content">
                        <Row key={currentVideo.id}>
                            <Col md={7} className={`home-pic-container ${isTransitioning ? (transitionDirection === 'left' ? 'slide-out-left' : 'slide-out-right') : 'slide-in'}`}>
                                <div className="image-container">
                                    <div onClick={handlePrevVideo} variant="dark" className="nav-button left-button"><IoIosArrowDropleft style={{fontSize:'2rem'}} /></div>
                                    <div onClick={handleNextVideo} variant="dark" className="nav-button right-button"><IoIosArrowDropright style={{fontSize:'2rem'}}  /></div>
                                    <img src={currentVideo.gambar} alt={currentVideo.title} className="home-pic" />
                                </div>
                            </Col>
                            <Col md={5} className={`home-desc ${isContentTransitioning ? 'fade-out' : 'fade-in'}`}>
                                <h1>{currentVideo.title}</h1>
                                <p>{currentVideo.description}</p>
                            </Col>
                        </Row>
                        <VisibilitySensor onChange={onSpekVisibleChange}>
                            <Container className="home-spek">
                                <Row className="justify-content-center">
                                    <Col md={3} className='speedo'>
                                        <img src={speedometer} style={{width:"50%",height:"70%"}} />
                                        <h2>{currentVideo.speed}</h2>
                                    </Col>
                                    <Col md={3} className='speedo' style={{textAlign:'center'}}>
                                        <h1 style={{fontSize:'5rem'}}>V8</h1>
                                    </Col>
                                    <Col md={3} className='speedo'>
                                        <img src={currentVideo.logo} style={{width:"50%",height:"70%"}} />
                                    </Col>
                                </Row>
                            </Container>
                        </VisibilitySensor>
                    </Container>
                )}
            </Container>
        </section>
    );
}

export default Home;
