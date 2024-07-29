import React, { useState, useEffect, useCallback } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import videodata from '../Home/Homedata';
import speedometer from '../../assets/speedometer.png';
import ScrollReveal from "scrollreveal";

const VideoComponent = React.memo(({ video, transition }) => (
    <div className={`video-overlay ${transition}`}>
        <video className="video-background" key={video} autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div>
));

const Home = () => {
    const [videos] = useState(videodata());
    const [videoIndex, setVideoIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [transitionDirection, setTransitionDirection] = useState('');

    const preloadVideos = useCallback(() => {
        videos.forEach(video => {
            const vid = document.createElement('video');
            vid.src = video.video;
        });
    }, [videos]);

    useEffect(() => {
        preloadVideos();
    }, [preloadVideos]);

    const handleNextVideo = () => {
        setIsTransitioning(true);
        setTransitionDirection('left');
        setTimeout(() => {
            setVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
            setIsTransitioning(false);
        }, 500); 
    };

    const handlePrevVideo = () => {
        setIsTransitioning(true);
        setTransitionDirection('right');
        setTimeout(() => {
            setVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
            setIsTransitioning(false);
        }, 500); 
    };

    const currentVideo = videos[videoIndex];

    return (
        <section className="video-background-container">
            {videos.length > 0 && currentVideo && (
                <VideoComponent video={currentVideo.video} transition={isTransitioning ? (transitionDirection === 'left' ? 'slide-out-left' : 'slide-out-right') : 'slide-in'} />
            )}
            <Container fluid className="home-section" id="home">
                {currentVideo && (
                    <Container className="home-content">
                        <Row key={currentVideo.id}>
                            <Col md={7} className={`home-pic-container ${isTransitioning ? (transitionDirection === 'left' ? 'slide-out-left' : 'slide-out-right') : 'slide-in'}`}>
                                <div className="image-container">
                                    <div onClick={handlePrevVideo} className="nav-button left-button">
                                        <IoIosArrowDropleft style={{ fontSize: '2rem' }} />
                                    </div>
                                    <div onClick={handleNextVideo} className="nav-button right-button">
                                        <IoIosArrowDropright style={{ fontSize: '2rem' }} />
                                    </div>
                                    <img src={currentVideo.gambar} alt={currentVideo.title} className="home-pic" />
                                </div>
                            </Col>
                            <Col md={5} className={`home-desc ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                                <h1>{currentVideo.title}</h1>
                                <p>{currentVideo.description}</p>
                            </Col>
                        </Row>
                        <Container className="home-spek">
                            <Row className="justify-content-center">
                                <Col xs={3} className='speedo'>
                                    <div className="speedo-content">
                                        <img src={speedometer} className="speedo-img" alt="Speedometer" />
                                        <h2 className="speedo-text">{currentVideo.speed}</h2>
                                    </div>
                                </Col>
                                <Col xs={3} className='speedo'>
                                    <div className="speedo-content">
                                        <h1 className="speedo-title" >{currentVideo.mesin}</h1>
                                        <h2 style={{fontFamily:"Tomorrow",}}>Engine</h2>
                                    </div>
                                </Col>
                                <Col xs={3} className='speedo'>
                                    <div className="speedo-content">
                                        <img src={currentVideo.logo} className="speedo-img" alt={currentVideo.title} />
                                    </div>
                                </Col>
                                <Col xs={3} className='speedo'>
                                    <div className="speedo-content">
                                        <img src={currentVideo.bendera} className="bendera" />
                                    </div>
                                </Col>
                               </Row>
                        </Container>
                    </Container>
                )}
            </Container>
        </section>
    );
}

export default Home;
