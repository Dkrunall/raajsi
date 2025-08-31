"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function RoyalPromise() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, setVisibleItems] = useState([true, true, true, true]); // Default all visible

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          
          // Calculate which items should be visible based on scroll position
          const section = document.querySelector('section:nth-child(2)');
          if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            
            // Calculate scroll progress within the section with smoother threshold
            const scrollProgress = (currentScrollY - sectionTop + windowHeight * 0.8) / (sectionHeight + windowHeight * 0.6);
            const normalizedProgress = Math.max(0, Math.min(1, scrollProgress));
            
            // Determine which items should be visible with improved threshold
            const totalItems = 4;
            const itemsToShow = Math.ceil(normalizedProgress * totalItems);
            const newVisibleItems = Array.from({ length: totalItems }, (_, i) => i < itemsToShow);
            setVisibleItems(newVisibleItems);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial call to set visible items
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-responsive-image {
            width: 280px !important;
            height: 380px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            display: block !important;
            margin-top: 20px !important;
          }
          .mobile-responsive-content {
            padding-left: 15px !important;
            padding-right: 15px !important;
            text-align: center !important;
            padding-top: 2rem !important;
          }
          .mobile-responsive-title {
            font-size: 1.2rem !important;
            margin-bottom: 15px !important;
            text-align: center !important;
          }
          .mobile-responsive-text {
            font-size: 0.9rem !important;
            line-height: 1.4 !important;
            text-align: center !important;
          }
          .mobile-section {
            min-height: 60vh !important;
            padding-top: 80px !important;
            padding-bottom: 40px !important;
          }
          .mobile-card-section {
            min-height: auto !important;
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
        }
      `}</style>
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center mobile-section"
        style={{
          minHeight: "80vh",
          paddingTop: "120px",
          paddingBottom: "60px",
          position: "relative",
          backgroundColor: "#fff",
          backgroundImage: "url('/im1.png')",
          backgroundSize: "400px 400px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2
          style={{
            fontFamily: "'Rose Velt Personal Use Only', serif",
            color: "#4C0A2E",
            fontWeight: "bold",
            fontSize: "1.6rem",
            letterSpacing: "1px",
            margin: 0,
            textTransform: "uppercase",
            zIndex: 1,
            opacity: 1,
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <span style={{ fontSize: "1.8rem" }}>A</span>T <span style={{ fontSize: "1.8rem" }}>R</span>AAJSI, <span style={{ fontSize: "1.8rem" }}>L</span>UXURY <span style={{ fontSize: "1.8rem" }}>M</span>EETS <span style={{ fontSize: "1.8rem" }}>R</span>ESPONSIBILITY.
        </h2>

        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            maxWidth: "700px",
            zIndex: 1,
            opacity: 1,
            transform: `translateY(${scrollY * 0.05}px)`,
            transition: "transform 0.3s ease-out",
          }}
          className="text-dark mt-2"
        >
          OUR ROYAL PROMISE IS BUILT ON INTEGRITY, TRANSPARENCY, AND TIMELESS
          CARE  <br /> -FOR YOU AND THE PLANET.
        </p>

        <div className="mt-5 d-flex justify-content-center" style={{ marginTop: "384px" }}>
          <button
            onClick={() => {
              const cardSection = document.querySelector('#card-section');
              if (cardSection) {
                // Scroll to the middle of the card section
                const sectionTop = cardSection.offsetTop;
                const sectionHeight = cardSection.offsetHeight;
                const windowHeight = window.innerHeight;
                const scrollTo = sectionTop + (sectionHeight / 2) - (windowHeight / 2);
                
                window.scrollTo({
                  top: scrollTo,
                  behavior: 'smooth'
                });
              }
            }}
            style={{
              fontSize: "1.4rem",
              border: "2px solid #000",
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "#000",
              transition: "all 0.3s ease",
              outline: "none",
              fontWeight: "bold",
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.15)";
              e.target.style.borderColor = "#000";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = `scale(1) translateY(${scrollY * 0.02}px)`;
              e.target.style.borderColor = "#000";
            }}
          >
            &#8595;
          </button>
        </div>
      </section>

      {/* Card Section - Second Section */}
      <section
        id="card-section"
        className="d-flex align-items-center justify-content-center mobile-card-section"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 15px",
          minHeight: "120vh",
          position: "relative",
          borderRadius: "30px",
          overflow: "hidden",
          top: "-50px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('/background3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            borderRadius: "30px",
            zIndex: -1,
            opacity: 0.5,
            transform: `translateY(${scrollY * 0.1}px)`,
            transition: "transform 0.3s ease-out",
          }}
        ></div>

        <div className="container">
          <div className="row">
            <div className="col-md-4 col-12">
              <img
                src="/image5.png"
                alt="Royal Promise Art"
                className="img-fluid mobile-responsive-image"
                style={{
                  width: "350px",
                  height: "500px",
                  objectFit: "cover",
                  borderRadius: "200px",
                  position: "relative",
                  marginTop: "50px",
                  marginLeft: "80px",
                }}
              />
            </div>

            <div className="col-md-8 col-12">
              <div 
                className="ps-md-5 pt-5 pb-5 mobile-responsive-content"
                style={{
                  transform: `translateY(${Math.sin(scrollY * 0.002) * 3}px) rotateX(${Math.sin(scrollY * 0.001) * 0.5}deg) scale(${1 + Math.sin(scrollY * 0.0015) * 0.01})`,
                  transition: "transform 0.4s ease-out",
                  position: "relative",
                  zIndex: 2,
                  perspective: "800px",
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  paddingTop: "3rem",
                  paddingBottom: "3rem",
                }}
              >
                {[
                  {
                    title:
                      "TIME-TESTED FORMULAS DERIVED FROM ANCIENT SCIENCES AND SCRIPTURES",
                    desc: "Rooted in Ayurveda and proven through generations of ritual wisdom",
                  },
                  {
                    title:
                      "HIGH-QUALITY, ORGANIC INGREDIENTS FOR OPTIMAL EFFICACY",
                    desc: "Sourced from certified farms to ensure purity and potency in every drop.",
                  },
                  {
                    title: "ECO-FRIENDLY MANUFACTURING PROCESSES",
                    desc: "Produced in small batches using low-impact, conscious methods.",
                  },
                  {
                    title: "CRUELTY-FREE AND SUSTAINABLE PRACTICES",
                    desc: "Approved by ethical standards—never tested on animals, always kind to nature.",
                  },
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="mb-4"
                    style={{
                      opacity: visibleItems[idx] ? 1 : 0.75,
                      transform: visibleItems[idx] 
                        ? `translateY(${-scrollY * 0.03 * (idx + 1)}px) scale(1) rotateZ(${scrollY * 0.0002 * (idx + 1)}deg)` 
                        : `translateY(${3 - scrollY * 0.03 * (idx + 1)}px) scale(0.995) rotateZ(${scrollY * 0.0002 * (idx + 1)}deg)`,
                      transition: `all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                      // Minimize height for second and fourth items
                      marginBottom: idx === 1 || idx === 3 ? "20px" : "40px",
                      filter: visibleItems[idx] ? "drop-shadow(0 2px 4px rgba(0,0,0,0.1))" : "drop-shadow(0 1px 2px rgba(0,0,0,0.05))",
                    }}
                  >
                    <h6
                      className="mobile-responsive-title"
                      style={{
                        fontFamily: "'Rose Velt Personal Use Only', serif",
                        color: "#000",
                        fontWeight: "500",
                        fontSize: "1.6rem",
                        lineHeight: "1.3",
                        marginBottom: idx === 1 || idx === 3 ? "4px" : "8px",
                        transition: "transform 0.4s ease-out",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        maxWidth: "100%",
                      }}
                    >
                      {item.title}
                    </h6>

                    <div className="d-flex align-items-center" style={{ 
                      marginTop: idx === 1 || idx === 3 ? "8px" : "16px",
                      maxWidth: "100%",
                      overflow: "hidden"
                    }}>
                      {/* Decorative Icon */}
                      <div className="me-2" style={{ marginTop: "0px", flexShrink: 0 }}>
                        <img
                          src="/dot.png"
                          alt="Design"
                          style={{ 
                            width: "20px",
                            transform: visibleItems[idx] 
                              ? `scale(1.05) rotate(${Math.min(scrollY * 0.002, 2)}deg)` 
                              : `scale(1) rotate(${Math.min(scrollY * 0.002, 2)}deg)`,
                            transition: "transform 0.4s ease-out",
                            filter: visibleItems[idx] ? "drop-shadow(0 1px 2px rgba(180, 131, 56, 0.2))" : "none",
                          }}
                        />
                      </div>
                      
                      <div style={{ flex: 1 }}>
                        <p 
                          className="mobile-responsive-text"
                          style={{ 
                            fontSize: "13px", 
                            color: "#333", 
                            lineHeight: "1.5",
                            margin: 0,
                            transform: visibleItems[idx] 
                              ? `translateY(0px)` 
                              : `translateY(1px)`,
                            transition: "transform 0.4s ease-out",
                            opacity: visibleItems[idx] ? 1 : 0.85,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="my-3" style={{ 
                      marginTop: idx === 1 || idx === 3 ? "12px" : "24px",
                      marginBottom: idx === 1 || idx === 3 ? "12px" : "24px"
                    }}>
                      <img
                        src="/line.png"
                        alt="Divider"
                        style={{ 
                          height: idx === 1 || idx === 3 ? "40px" : "60px", 
                          width: "1px",
                          opacity: visibleItems[idx] ? 1 : 0.5,
                          transform: visibleItems[idx] 
                            ? `scaleY(1) translateY(${scrollY * 0.002}px) rotate(${scrollY * 0.005}deg)` 
                            : `scaleY(0.95) translateY(${scrollY * 0.002}px) rotate(${scrollY * 0.005}deg)`,
                          transition: "all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.25s",
                          filter: visibleItems[idx] ? "drop-shadow(0 1px 1px rgba(0,0,0,0.1))" : "none",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
