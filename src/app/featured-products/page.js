// src/app/featured-products/page.js
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./featured.module.css"; // optional custom styling

export default function FeaturedProducts() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Mobile product slider state
  const [currentProductSlide, setCurrentProductSlide] = useState(0);
  const [currentHairSlide1, setCurrentHairSlide1] = useState(0);
  const [currentHairSlide2, setCurrentHairSlide2] = useState(0);
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const testimonials = [
    {
      text: "I love this Vitamin C serum, I can see my skin becomes brighter after one to two days only which is remarkable.",
      author: "Luisa",
      rating: 4
    },
    {
      text: "Amazing products! The quality is outstanding and the results are visible within days. Highly recommended for anyone looking for premium skincare.",
      author: "Priya",
      rating: 5
    },
    {
      text: "The royal collection has transformed my skincare routine completely. Natural ingredients with luxurious feel and incredible results.",
      author: "Sarah",
      rating: 5
    },
    {
      text: "Exceptional quality and packaging. The products feel premium and deliver on their promises. Worth every penny!",
      author: "Maya",
      rating: 4
    },
    {
      text: "I've been using these products for months now and the difference is remarkable. My skin has never looked better!",
      author: "Anita",
      rating: 5
    },
    {
      text: "The traditional formulations combined with modern science create magic. These products are truly special.",
      author: "Kavya",
      rating: 5
    }
  ];
  
  const totalSlides = Math.ceil(testimonials.length / 3);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };
  
  const getVisibleTestimonials = () => {
    const startIndex = currentSlide * 3;
    return testimonials.slice(startIndex, startIndex + 3);
  };
  
  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000); // Change slide every 4 seconds
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  // Mobile detection useEffect
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile product slider functions
  const nextProductSlide = () => {
    setCurrentProductSlide((prev) => (prev + 1) % 4);
  };

  const prevProductSlide = () => {
    setCurrentProductSlide((prev) => (prev - 1 + 4) % 4);
  };

  const nextHairSlide1 = () => {
    setCurrentHairSlide1((prev) => (prev + 1) % 4);
  };

  const prevHairSlide1 = () => {
    setCurrentHairSlide1((prev) => (prev - 1 + 4) % 4);
  };

  const nextHairSlide2 = () => {
    setCurrentHairSlide2((prev) => (prev + 1) % 4);
  };

  const prevHairSlide2 = () => {
    setCurrentHairSlide2((prev) => (prev - 1 + 4) % 4);
  };

  // Mobile testimonial slider functions
  const nextTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonialSlide = () => {
    setCurrentTestimonialSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);
  return (
    <div className="position-relative text-white">
      {/* Background image */}
      <div
        className={`${styles.heroSection} d-flex align-items-center justify-content-center text-center`}
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ zIndex: -1 }}
        >
          <Image
            src="/featured-bg.png" // ✅ Save your image as 'public/featured-bg.jpg'
            alt="Featured Background"
            width={1920}
            height={1080}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            quality={100}
          />
        </div>

        {/* Text Overlay */}
        <div className="container">
          <h2 className="custom-heading" style={{
            fontFamily: "Avenir, sans-serif!important",
            color: "#fff",
            fontSize: "1.5rem",
            letterSpacing: "1px",
            margin: 0,
            textTransform: "capitalize"
          }}>
            <span style={{ fontSize: "1.5rem" }}>E</span>xplore our wide range of luxurious skincare <br/> and wellness products to celebrate beauty that is timeless.
          </h2>
          <p className="fs-4 mt-3" style={{
              fontFamily: "Georgia, serif",
              fontWeight: "500",
              letterSpacing: "0.5px",
              lineHeight: "1.5",
              background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>शरीरमाद्यं खलु धर्मसाधनम्</p>
          
          <style jsx>{`
            @media (max-width: 768px) {
              h2 {
                font-size: 1.2rem !important;
                line-height: 1.4 !important;
                padding: 0 15px !important;
              }
              h2 span {
                font-size: 1.4rem !important;
              }
              .fs-4 {
                font-size: 1rem !important;
                margin-top: 1rem !important;
              }
            }
            @media (max-width: 480px) {
              h2 {
                font-size: 1rem !important;
                line-height: 1.3 !important;
                padding: 0 10px !important;
              }
              h2 span {
                font-size: 1.2rem !important;
              }
              .fs-4 {
                font-size: 0.9rem !important;
                margin-top: 0.8rem !important;
              }
            }
          `}</style>

          {/* Circular Down Arrow */}
          <div className="mt-4 d-flex justify-content-center">
            <button
              onClick={() => {
                const nextSection = document.querySelector('.py-5.bg-light');
                if (nextSection) {
                  nextSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              style={{
                fontSize: "1.2rem",
                border: "2px solid rgba(255, 255, 255, 0.8)",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "rgba(255, 255, 255, 0.8)",
                transition: "all 0.3s ease",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "scale(1)";
              }}
            >
              &#8595;
            </button>
          </div>
        </div>
      </div>

      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Heading + Ornaments */}
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
            <img src="/FD1.png" alt="left" className={styles.ornament} />
            <div>
              <span className="badge rounded-pill text-bg-warning px-4 py-2 mb-2 fw-semibold">
                BODY THERAPY
              </span>
              <h2 style={{
                fontFamily: "Georgia, serif",
                fontWeight: "500",
                fontSize: "1.6rem",
                letterSpacing: "0.5px",
                lineHeight: "1.5",
                margin: "0",
                textTransform: "uppercase",
                background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                दिव्य चांदनं त्वं मम त्वचायै च शुभम् <br />
                सौन्दर्यसाधनं मम मनःसुखदायकम्
              </h2>
            </div>
            <img src="/FD2.png" alt="right" className={styles.ornament} />
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          position: "relative",
          marginTop: "-80px",
        }}
      >
        {/* Background Container - Now Responsive */}
        <div className={`w-100 ${styles.responsiveContainer}`}>
          {/* Background Image (absolute, full cover) */}
          <Image
            src="/background3.png"
            alt="Featured Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "30px",
            }}
          />

          {/* Foreground content on top of image */}
          <div className={styles.responsiveContent}>
            {/* Grid of Cards */}
            <div className="container">
              {/* Desktop Grid Layout */}
              {!isMobile && (
                <div className="row gy-4">
                  {[1, 2, 3, 4].map((item, index) => (
                    <div
                      key={index}
                      className="col-12 col-md-6 d-flex flex-column align-items-center"
                    >
                    <div
                      className="card w-100"
                      style={{
                        height: "350px",
                        backgroundImage: `url(${
                          index % 2 === 0 ? "/card11.png" : "/card12.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Overlay for better text visibility */}
                           <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: "rgba(0, 0, 0, 0.2)",
                                borderRadius: "15px",
                                zIndex: 1,
                                pointerEvents: "none"
                              }}
                            />
                      {/* Shloka */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          fontSize: "0.6rem",
                          fontFamily: "Georgia, serif",
                          fontWeight: "500",
                          letterSpacing: "0.5px",
                          maxWidth: "65%",
                          lineHeight: "1.5",
                          background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          zIndex: 2
                        }}
                      >
                        मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                        यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                      </div>

                      {/* Top-right label */}
                      <div
                        className="card-label"
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: "#fff",
                          padding: "4px 10px",
                          fontSize: "0.6rem",
                          borderRadius: "20px",
                          fontWeight: 500,
                          fontFamily: "Arial, sans-serif",
                        }}
                      >
                        Ingredients & Benefits
                      </div>

                      {/* Bottom Content */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          color: "#fff",
                          padding: "1rem",
                          fontFamily: "Georgia, serif",
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "14px", fontFamily: "'Rose Velt Personal Use Only', serif" }}>
                          {index % 2 === 0
                            ? "COSMIC BODY OIL"
                            : "LAVISH BODY SCRUB"}
                        </h5>
                        <p style={{ fontSize: "12px", fontFamily: "Avenir, sans-serif!important" }}>
                          {index % 2 === 0
                            ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                            : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                        </p>
                      </div>
                    </div>

                    {/* Button & Price */}
                    <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#8B5E3C",
                          color: "white",
                          borderRadius: "30px",
                          padding: "8px 20px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                      <div className="text-end">
                        <strong style={{ fontSize: "14px", color: "#000" }}>₹1800</strong>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          Get 50% OFF ₹2400
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              )}
              
              {/* Mobile Slider Layout */}
               {isMobile && (
                 <div className={`${styles.mobileSliderContainer} position-relative`}>
                   {/* Mobile Product Slider */}
                   <div 
                     className={styles.mobileSliderTrack}
                     style={{
                       transform: `translateX(-${currentProductSlide * 100}%)`
                     }}
                   >
                     {[1, 2, 3, 4].map((item, index) => (
                       <div
                         key={index}
                         className={styles.mobileSlideItem}
                       >
                        <div
                          className="card w-100"
                          style={{
                            height: "350px",
                            backgroundImage: `url(${
                              index % 2 === 0 ? "/card11.png" : "/card12.png"
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "15px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Overlay for better text visibility */}
                           <div
                             style={{
                               position: "absolute",
                               top: 0,
                               left: 0,
                               right: 0,
                               bottom: 0,
                               background: "rgba(0, 0, 0, 0.2)",
                               borderRadius: "15px",
                               zIndex: 1,
                               pointerEvents: "none"
                             }}
                           />
                          <div
                             style={{
                               position: "absolute",
                               top: "10px",
                               left: "10px",
                               fontSize: "0.6rem",
                               fontFamily: "Georgia, serif",
                               fontWeight: "500",
                               letterSpacing: "0.5px",
                               maxWidth: "65%",
                               lineHeight: "1.5",
                               background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                               WebkitBackgroundClip: "text",
                               WebkitTextFillColor: "transparent",
                               zIndex: 2
                             }}
                          >
                            मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                            यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              backgroundColor: "rgba(0, 0, 0, 0.4)",
                              color: "#fff",
                              padding: "4px 10px",
                              fontSize: "0.6rem",
                              borderRadius: "20px",
                              fontWeight: 500,
                              fontFamily: "Arial, sans-serif",
                            }}
                          >
                            Ingredients & Benefits
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "0",
                              width: "100%",
                              color: "#fff",
                              padding: "1rem",
                              fontFamily: "Georgia, serif",
                            }}
                          >
                            <h5 style={{ fontWeight: "bold", fontSize: "14px", fontFamily: "'Rose Velt Personal Use Only', serif" }}>
                              {index % 2 === 0
                                ? "COSMIC BODY OIL"
                                : "LAVISH BODY SCRUB"}
                            </h5>
                            <p style={{ fontSize: "12px", fontFamily: "Avenir, sans-serif!important" }}>
                              {index % 2 === 0
                                ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                                : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                            </p>
                          </div>
                        </div>

                        <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                          <button
                            className="btn btn-sm"
                            style={{
                              backgroundColor: "#8B5E3C",
                              color: "white",
                              borderRadius: "30px",
                              padding: "8px 20px",
                            }}
                          >
                            VIEW PRODUCT
                          </button>
                          <div className="text-end">
                            <strong style={{ fontSize: "14px", color: "#000" }}>₹1800</strong>
                            <div
                              style={{
                                fontSize: "0.6rem",
                                textDecoration: "line-through",
                                color: "gray",
                              }}
                            >
                              Get 50% OFF ₹2400
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Mobile Navigation Arrows */}
                {/* Navigation arrows */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    onClick={prevProductSlide}
                    className="btn"
                    style={{
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "none",
                    }}
                  >
                    ‹
                  </button>
                  
                  {/* Slide indicators */}
                  <div className="d-flex gap-2">
                    {[0, 1, 2, 3].map((slide) => (
                      <div
                        key={slide}
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: currentProductSlide === slide ? "#8B5E3C" : "#ccc",
                        }}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextProductSlide}
                    className="btn"
                    style={{
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "none",
                    }}
                  >
                    ›
                  </button>
                </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Heading + Ornaments */}
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
            <img src="/FD1.png" alt="left" className={styles.ornament} />
            <div>
              <span
                className="badge rounded-pill px-4 py-2 mb-2 fw-semibold"
                style={{
                  backgroundColor: "#000000",
                  color: "white",
                }}
              >
                HAIR THERAPY
              </span>

              <h2 style={{
                fontFamily: "Georgia, serif",
                fontWeight: "500",
                fontSize: "1.6rem",
                letterSpacing: "0.5px",
                lineHeight: "1.5",
                margin: "0",
                textTransform: "uppercase",
                background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                दिव्य चांदनं त्वं मम त्वचायै च शुभम् <br />
                सौन्दर्यसाधनं मम मनःसुखदायकम्
              </h2>
            </div>
            <img src="/FD2.png" alt="right" className={styles.ornament} />
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          position: "relative",
          marginTop: "-80px",
        }}
      >
        {/* Background Container - Now Responsive */}
        <div className={`w-100 ${styles.responsiveContainer}`}>
          {/* Background Image (absolute, full cover) */}
          <Image
            src="/background3.png"
            alt="Featured Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "30px",
            }}
          />

          {/* Foreground content on top of image */}
          <div className={styles.responsiveContent}>
            {/* Desktop Grid of Cards */}
            {!isMobile && (
              <div className="container">
                <div className="row gy-4">
                  {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 d-flex flex-column align-items-center"
                  >
                    <div
                      className="card w-100"
                      style={{
                        height: "350px",
                        backgroundImage: `url(${
                          index % 2 === 0 ? "/card11.png" : "/card12.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Overlay for better text visibility */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0, 0, 0, 0.2)",
                          borderRadius: "15px",
                          zIndex: 1,
                          pointerEvents: "none"
                        }}
                      />
                      {/* Shloka */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          fontSize: "0.6rem",
                          fontFamily: "Georgia, serif",
                          fontWeight: "500",
                          letterSpacing: "0.5px",
                          maxWidth: "65%",
                          lineHeight: "1.5",
                          background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          zIndex: 2
                        }}
                      >
                        मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                        यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                      </div>

                      {/* Top-right label */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: "#fff",
                          padding: "4px 10px",
                          fontSize: "0.6rem",
                          borderRadius: "20px",
                          fontWeight: 500,
                          fontFamily: "Arial, sans-serif",
                          zIndex: 2
                        }}
                      >
                        Ingredients & Benefits
                      </div>

                      {/* Bottom Content */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          color: "#fff",
                          padding: "1rem",
                          fontFamily: "Georgia, serif",
                          zIndex: 2
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "14px", fontFamily: "'Rose Velt Personal Use Only', serif" }}>
                          {index % 2 === 0
                            ? "COSMIC BODY OIL"
                            : "LAVISH BODY SCRUB"}
                        </h5>
                        <p style={{ fontSize: "12px", fontFamily: "Avenir, sans-serif!important" }}>
                          {index % 2 === 0
                            ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                            : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                        </p>
                      </div>
                    </div>

                    {/* Button & Price */}
                    <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#8B5E3C",
                          color: "white",
                          borderRadius: "30px",
                          padding: "8px 20px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                      <div className="text-end">
                        <strong style={{ fontSize: "14px", color: "#000" }}>₹1800</strong>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          Get 50% OFF ₹2400
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Mobile Slider for Hair Therapy 1 */}
            {isMobile && (
              <div className="container">
                <div className={styles.mobileSliderContainer}>
                  <div 
                    className={styles.mobileSliderTrack}
                    style={{
                      transform: `translateX(-${currentHairSlide1 * 100}%)`
                    }}
                  >
                    {[1, 2, 3, 4].map((item, index) => (
                      <div key={index} className={styles.mobileSlideItem}>
                        <div
                          className="card w-100"
                          style={{
                            height: "350px",
                            backgroundImage: `url(${
                              index % 2 === 0 ? "/card11.png" : "/card12.png"
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "15px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Overlay for better text visibility */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "15px",
                              zIndex: 1,
                              pointerEvents: "none"
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              left: "10px",
                              fontSize: "0.6rem",
                              fontFamily: "Georgia, serif",
                              fontWeight: "500",
                              letterSpacing: "0.5px",
                              maxWidth: "65%",
                              lineHeight: "1.5",
                              background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              zIndex: 2
                            }}
                          >
                            मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                            यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              backgroundColor: "rgba(0, 0, 0, 0.4)",
                              color: "#fff",
                              padding: "4px 10px",
                              fontSize: "0.6rem",
                              borderRadius: "20px",
                              fontWeight: 500,
                              fontFamily: "Arial, sans-serif",
                              zIndex: 2
                            }}
                          >
                            Ingredients & Benefits
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "0",
                              width: "100%",
                              color: "#fff",
                              padding: "1rem",
                              fontFamily: "Georgia, serif",
                              zIndex: 2
                            }}
                          >
                            <h5 style={{ fontWeight: "bold", fontSize: "14px", fontFamily: "'Rose Velt Personal Use Only', serif" }}>
                              {index % 2 === 0
                                ? "COSMIC HAIR OIL"
                                : "NOURISH HAIR MASK"}
                            </h5>
                            <p style={{ fontSize: "12px", fontFamily: "Avenir, sans-serif!important" }}>
                              {index % 2 === 0
                                ? "Transform your hair with celestial nourishment. Natural oils blend to strengthen and add lustrous shine."
                                : "Deep conditioning treatment with traditional herbs. Repairs damage and restores natural hair health."}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                          <button
                            className="btn btn-sm"
                            style={{
                              backgroundColor: "#8B5E3C",
                              color: "white",
                              borderRadius: "30px",
                              padding: "8px 20px",
                            }}
                          >
                            VIEW PRODUCT
                          </button>
                          <div className="text-end">
                            <strong style={{ fontSize: "14px", color: "#000" }}>₹1600</strong>
                            <div
                              style={{
                                fontSize: "0.6rem",
                                textDecoration: "line-through",
                                color: "gray",
                              }}
                            >
                              Get 40% OFF ₹2200
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation arrows */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    onClick={prevHairSlide1}
                    className="btn"
                    style={{
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "none",
                    }}
                  >
                    ‹
                  </button>
                  
                  {/* Slide indicators */}
                  <div className="d-flex gap-2">
                    {[0, 1, 2, 3].map((slide) => (
                      <div
                        key={slide}
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: currentHairSlide1 === slide ? "#8B5E3C" : "#ccc",
                        }}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextHairSlide1}
                    className="btn"
                    style={{
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "none",
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container text-center">
          {/* Heading + Ornaments */}
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3 flex-wrap">
            <img src="/FD1.png" alt="left" className={styles.ornament} />
            <div>
              <span
                className="badge rounded-pill px-4 py-2 mb-2 fw-semibold"
                style={{
                  backgroundColor: "#BA7E38", // 💡 Replace with your desired color
                  color: "white", // 👈 Set text color to contrast
                }}
              >
                HAIR THERAPY
              </span>

              <h2 className="fs-5 m-0" style={{
                fontFamily: "Georgia, serif",
                fontWeight: "500",
                letterSpacing: "0.5px",
                lineHeight: "1.5",
                background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                दिव्य चांदनं त्वं मम त्वचायै च शुभम् <br />
                सौन्दर्यसाधनं मम मनःसुखदायकम्
              </h2>
            </div>
            <img src="/FD2.png" alt="right" className={styles.ornament} />
          </div>
        </div>
      </section>
      <section
        className="d-flex justify-content-center align-items-center py-5"
        style={{
          position: "relative",
          marginTop: "-80px",
        }}
      >
        {/* Background Container - Now Responsive */}
        <div className={`w-100 ${styles.responsiveContainer}`}>
          {/* Background Image (absolute, full cover) */}
          <Image
            src="/background3.png"
            alt="Featured Background"
            fill
            style={{
              objectFit: "cover",
              zIndex: 1,
              borderRadius: "30px",
            }}
          />

          {/* Foreground content on top of image */}
          <div className={styles.responsiveContent}>
            {/* Desktop Grid of Cards */}
            {!isMobile && (
              <div className="container">
                <div className="row gy-4">
                {[1, 2, 3, 4].map((item, index) => (
                  <div
                    key={index}
                    className="col-12 col-md-6 d-flex flex-column align-items-center"
                  >
                    <div
                      className="card w-100"
                      style={{
                        height: "350px",
                        backgroundImage: `url(${
                          index % 2 === 0 ? "/card11.png" : "/card12.png"
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        borderRadius: "15px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {/* Overlay for better text visibility */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: "rgba(0, 0, 0, 0.2)",
                          borderRadius: "15px",
                          zIndex: 1,
                          pointerEvents: "none"
                        }}
                      />
                      {/* Shloka */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          fontSize: "0.6rem",
                          fontFamily: "Georgia, serif",
                          fontWeight: "500",
                          letterSpacing: "0.5px",
                          maxWidth: "65%",
                          lineHeight: "1.5",
                          background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          zIndex: 2
                        }}
                      >
                        मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                        यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                      </div>

                      {/* Top-right label */}
                      <div
                        style={{
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                          backgroundColor: "rgba(0, 0, 0, 0.4)",
                          color: "#fff",
                          padding: "4px 10px",
                          fontSize: "0.6rem",
                          borderRadius: "20px",
                          fontWeight: 500,
                          fontFamily: "Arial, sans-serif",
                          zIndex: 2
                        }}
                      >
                        Ingredients & Benefits
                      </div>

                      {/* Bottom Content */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          width: "100%",
                          color: "#fff",
                          padding: "1rem",
                          fontFamily: "Georgia, serif",
                          zIndex: 2
                        }}
                      >
                        <h5 style={{ fontWeight: "bold", fontSize: "14px", fontFamily: "'Rose Velt Personal Use Only', serif" }}>
                          {index % 2 === 0
                            ? "COSMIC BODY OIL"
                            : "LAVISH BODY SCRUB"}
                        </h5>
                        <p style={{ fontSize: "12px", fontFamily: "Avenir, sans-serif!important" }}>
                          {index % 2 === 0
                            ? "Unlock celestial beauty in a bottle. A careful blend of essential oils and natural ingredients that melt into your skin, leaving you nourished and calm."
                            : "A royal touch to desi household ingredients crafted for indulgence. Suitable for all skin types, and achieves smooth skin."}
                        </p>
                      </div>
                    </div>

                    {/* Button & Price */}
                    <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#8B5E3C",
                          color: "white",
                          borderRadius: "30px",
                          padding: "8px 20px",
                        }}
                      >
                        VIEW PRODUCT
                      </button>
                      <div className="text-end">
                        <strong style={{ fontSize: "14px", color: "#000" }}>₹1800</strong>
                        <div
                          style={{
                            fontSize: "0.6rem",
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          Get 50% OFF ₹2400
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Mobile Slider for Hair Therapy 2 */}
            {isMobile && (
              <div className="container">
                <div className={styles.mobileSliderContainer}>
                  <div 
                    className={styles.mobileSliderTrack}
                    style={{
                      transform: `translateX(-${currentHairSlide2 * 100}%)`
                    }}
                  >
                    {[1, 2, 3, 4].map((item, index) => (
                      <div key={index} className={styles.mobileSlideItem}>
                        <div
                          className="card w-100"
                          style={{
                            height: "350px",
                            backgroundImage: `url(${
                              index % 2 === 0 ? "/card11.png" : "/card12.png"
                            })`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            borderRadius: "15px",
                            position: "relative",
                            overflow: "hidden",
                          }}
                        >
                          {/* Overlay for better text visibility */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background: "rgba(0, 0, 0, 0.2)",
                              borderRadius: "15px",
                              zIndex: 1,
                              pointerEvents: "none"
                            }}
                          />
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              left: "10px",
                              fontSize: "0.6rem",
                              fontFamily: "Georgia, serif",
                              fontWeight: "500",
                              letterSpacing: "0.5px",
                              maxWidth: "65%",
                              lineHeight: "1.5",
                              background: "linear-gradient(45deg, rgb(111, 87, 42) 0%, rgb(213, 167, 81) 50%, rgb(111, 87, 42) 100%)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              zIndex: 2
                            }}
                          >
                            मुग्धे! धानुष्कता केयमपूर्वा त्वयि दृश्यते <br />
                            यया विध्यसि चेतांसि गुणैरेव न सायकैः ॥
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              backgroundColor: "rgba(0, 0, 0, 0.4)",
                              color: "#fff",
                              padding: "4px 10px",
                              fontSize: "0.6rem",
                              borderRadius: "20px",
                              fontWeight: 500,
                              fontFamily: "Arial, sans-serif",
                              zIndex: 2
                            }}
                          >
                            Ingredients & Benefits
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              bottom: "0",
                              width: "100%",
                              color: "#fff",
                              padding: "1rem",
                              fontFamily: "Georgia, serif",
                              zIndex: 2
                            }}
                          >
                            <h5 style={{ fontWeight: "bold", fontSize: "14px", fontFamily: "'Rose Velt Personal Use Only', serif" }}>
                              {index % 2 === 0
                                ? "ROYAL HAIR SERUM"
                                : "HERBAL HAIR TONIC"}
                            </h5>
                            <p style={{ fontSize: "12px", fontFamily: "Avenir, sans-serif!important" }}>
                              {index % 2 === 0
                                ? "Premium hair serum with ancient Ayurvedic ingredients. Promotes growth and adds natural shine."
                                : "Traditional herbal blend for scalp health. Strengthens roots and prevents hair fall naturally."}
                            </p>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between w-100 px-2 px-md-4 mt-2">
                          <button
                            className="btn btn-sm"
                            style={{
                              backgroundColor: "#8B5E3C",
                              color: "white",
                              borderRadius: "30px",
                              padding: "8px 20px",
                            }}
                          >
                            VIEW PRODUCT
                          </button>
                          <div className="text-end">
                            <strong style={{ fontSize: "14px", color: "#000" }}>₹1900</strong>
                            <div
                              style={{
                                fontSize: "0.6rem",
                                textDecoration: "line-through",
                                color: "gray",
                              }}
                            >
                              Get 45% OFF ₹2500
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Navigation arrows */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <button
                    onClick={prevHairSlide2}
                    className="btn"
                    style={{
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "none",
                    }}
                  >
                    ‹
                  </button>
                  
                  {/* Slide indicators */}
                  <div className="d-flex gap-2">
                    {[0, 1, 2, 3].map((slide) => (
                      <div
                        key={slide}
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: currentHairSlide2 === slide ? "#8B5E3C" : "#ccc",
                        }}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextHairSlide2}
                    className="btn"
                    style={{
                      backgroundColor: "#8B5E3C",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      border: "none",
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-5 bg-white text-center">
        {/* Heading with left and right decorative images */}
        <div className="d-flex justify-content-center align-items-center gap-3 mb-2">
          <Image
            src="/left-design.png"
            alt="left decorative"
            width={32}
            height={32}
          />
          <h2
            style={{
              fontFamily: "'Rose Velt Personal Use Only', serif",
              color: "#4C0A2E",
              fontWeight: "bold",
              fontSize: "1.6rem",
              letterSpacing: "1px",
              margin: 0,
              textTransform: "uppercase"
            }}
          >
            <span style={{ fontSize: "1.8rem" }}>T</span>ESTIMONIALS
          </h2>
          <Image
            src="/right-design.png"
            alt="right decorative"
            width={32}
            height={32}
          />
        </div>
        {/* Subtitle */}
        <p
          className="text-muted mb-5"
          style={{ fontSize: "0.9rem", fontFamily: "Arial, sans-serif" }}
        >
          Some quotes from our happy customers
        </p>

        {/* Desktop Layout */}
        {!isMobile && (
          <div 
            className="d-flex justify-content-center align-items-center gap-3"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Left arrow - Always visible */}
            <button
              onClick={prevSlide}
              className="btn testimonial-arrow-left"
              style={{
                color: "#5c0b28",
                fontSize: "1.5rem",
                userSelect: "none",
                marginLeft: "50px",
                border: "2px solid #5c0b28",
                borderRadius: "4px",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5c0b28";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#5c0b28";
              }}
              aria-label="Previous"
            >
              &#x276E;
            </button>

            {/* Cards container */}
            <div className="container p-0" style={{ maxWidth: "1000px" }}>
              <div className="row justify-content-center gy-4">
                {getVisibleTestimonials().map((testimonial, idx) => (
                  <div key={currentSlide * 3 + idx} className="col-12 col-md-4">
                    <div
                      className="card shadow-sm"
                      style={{
                        minHeight: "250px",
                        borderRadius: "8px",
                        padding: "20px",
                        transition: "transform 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.transform = "translateY(-5px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: "1.5",
                          fontFamily: "Georgia, serif",
                          marginBottom: "20px"
                        }}
                      >
                        <span style={{ fontWeight: "bold", color: "#5c0b28" }}>&ldquo;</span>
                        {testimonial.text}
                        <span style={{ fontWeight: "bold", color: "#5c0b28" }}>&rdquo;</span>
                      </p>
                      <div className="d-flex align-items-center mt-auto">
                        <div
                          className="rounded-circle"
                          style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#BA7E38",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.2rem"
                          }}
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                        <span
                          className="ms-3 text-dark"
                          style={{
                            fontFamily: "Georgia, serif",
                            fontWeight: "600",
                            fontSize: "0.9rem"
                          }}
                        >
                          — {testimonial.author}
                        </span>
                      </div>
                      <div
                        className="mt-3"
                        style={{ fontSize: "1.1rem", color: "#BA7E38" }}
                      >
                        {Array.from({ length: 5 }, (_, i) => (
                          <span key={i}>
                            {i < testimonial.rating ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right arrow - Always visible */}
            <button
              onClick={nextSlide}
              className="btn testimonial-arrow-right"
              style={{
                color: "#5c0b28",
                fontSize: "1.5rem",
                userSelect: "none",
                marginRight: "50px",
                border: "2px solid #5c0b28",
                borderRadius: "4px",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#5c0b28";
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#5c0b28";
              }}
              aria-label="Next"
            >
              &#x276F;
            </button>
          </div>
        )}

        {/* Mobile Layout */}
        {isMobile && (
          <div className="container">
            <div className={styles.mobileSliderContainer}>
              <div 
                className={styles.mobileSliderTrack}
                style={{
                  transform: `translateX(-${currentTestimonialSlide * 100}%)`
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={styles.mobileSlideItem}>
                    <div
                      className="card shadow-sm"
                      style={{
                        minHeight: "280px",
                        borderRadius: "12px",
                        padding: "25px",
                        margin: "0 10px",
                        backgroundColor: "#fff"
                      }}
                    >
                      <p
                        style={{
                          fontSize: "0.9rem",
                          lineHeight: "1.6",
                          fontFamily: "Georgia, serif",
                          marginBottom: "20px",
                          textAlign: "center"
                        }}
                      >
                        <span style={{ fontWeight: "bold", color: "#5c0b28" }}>&ldquo;</span>
                        {testimonial.text}
                        <span style={{ fontWeight: "bold", color: "#5c0b28" }}>&rdquo;</span>
                      </p>
                      <div className="d-flex flex-column align-items-center mt-auto">
                        <div
                          className="rounded-circle mb-2"
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#BA7E38",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "1.4rem"
                          }}
                        >
                          {testimonial.author.charAt(0)}
                        </div>
                        <span
                          className="text-dark text-center"
                          style={{
                            fontFamily: "Georgia, serif",
                            fontWeight: "600",
                            fontSize: "1rem"
                          }}
                        >
                          — {testimonial.author}
                        </span>
                        <div
                          className="mt-2"
                          style={{ fontSize: "1.2rem", color: "#BA7E38" }}
                        >
                          {Array.from({ length: 5 }, (_, i) => (
                            <span key={i}>
                              {i < testimonial.rating ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile Navigation */}
            <div className="d-flex justify-content-center align-items-center mt-4 gap-3">
              <button
                onClick={prevTestimonialSlide}
                style={{
                  backgroundColor: "#8B5E3C",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                &#x276E;
              </button>
              
              {/* Mobile Slide Indicators */}
              <div className="d-flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonialSlide(index)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor: currentTestimonialSlide === index ? "#8B5E3C" : "#ddd",
                      cursor: "pointer"
                    }}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonialSlide}
                style={{
                  backgroundColor: "#8B5E3C",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "45px",
                  height: "45px",
                  fontSize: "1.2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                &#x276F;
              </button>
            </div>
           </div>
         )}
          
        <style jsx>{`
          @media (max-width: 768px) {
            .testimonial-arrow-left {
              font-size: 1.5rem !important;
              margin-left: 20px !important;
            }
            .testimonial-arrow-right {
              font-size: 1.5rem !important;
              margin-right: 20px !important;
            }
          }
          @media (max-width: 480px) {
            .testimonial-arrow-left {
              font-size: 1.2rem !important;
              margin-left: 10px !important;
            }
            .testimonial-arrow-right {
              font-size: 1.2rem !important;
              margin-right: 10px !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
