import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import logodata from "../About/Aboutdata";
import ScrollReveal from "scrollreveal";
import bgabout from "../../assets/bgabout.jpg";
import aboutimg1 from "../../assets/aboutimg.jpg"; // Contoh gambar
import aboutimg2 from "../../assets/aboutimg2.jpg"; // Contoh gambar
// import aboutimg3 from "../../assets/aboutimg3.jpg"; // Contoh gambar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(logodata());
    }, []);

    useEffect(() => {
        data.forEach((item, index) => {
            ScrollReveal().reveal(`.logo-image-${index}`, {
                duration: 2000,
                origin: 'bottom',
                distance: '50px',
                delay: index * 200,
            });
        });
    }, [data]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };

    return (
        <section className="about-section">
            <div className="about-bg">
                <img src={bgabout} alt="Background"  />
            </div>
            <Container fluid className="about-contain">
                <Container>
                    <h1 className="about-title">About Showroom</h1>
                    <p style={{ fontSize: "1.4rem", color: "#ffff", fontFamily: "Tomorrow, sans-serif" }}>
                        Welcome to Wecar, your premier destination for luxury and high-performance vehicles. Since our establishment in 2024, we have been dedicated to providing an unparalleled car buying experience, offering an extensive selection of the finest automobiles from renowned manufacturers around the world.
                    </p>
                    <p style={{ fontSize: "1.4rem", color: "#ffff", fontFamily: "Tomorrow, sans-serif" }}>
                        Our showroom is more than just a place to purchase a vehicle; it is a hub for car enthusiasts and a sanctuary for those who appreciate the art of automotive design. We pride ourselves on our curated collection, featuring the latest models as well as rare and classic cars that are sure to captivate and inspire.
                    </p>
                    <div className="container-img">
                        <Slider {...settings}>
                          
                                <div>
                                    <img src={aboutimg1} alt="About 1" className="img-fluid imgabout" />
                                </div>
                                <div >
                                    <img src={aboutimg2} alt="About 2" className="img-fluid imgabout" />
                                </div>
                      
                          
                            {/* <div>
                                <img src={aboutimg3} alt="About 3" className="img-fluid" />
                            </div> */}
                        </Slider>
                    </div>
                </Container>

                <Container className="logo-about">
                    <Row>
                        {data.map((item, index) => (
                            <Col md={2} key={item.id} className="text-center">
                                <img
                                    src={item.logo}
                                    alt={item.title}
                                    className={`img-fluid logo-image logo-image-${index}`}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default About;
