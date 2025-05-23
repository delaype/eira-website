import { TypographyHeading } from "../typography/TypographyHeading";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  isStudent: boolean;
}

export default function HeroSection({ isStudent }: HeroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);

  useEffect(() => {
    // Set loaded state after a small delay to ensure proper animation sequence
    const timer = setTimeout(() => {
      setIsLoaded(true);
      // Show bubbles after the main image has faded in
      setTimeout(() => {
        setShowBubbles(true);
      }, 1200); // Match the duration of fadeIn animation
    }, 100);

    // Check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        setMousePosition({
          x: (e.clientX - window.innerWidth / 2) / 50,
          y: (e.clientY - window.innerHeight / 2) / 50
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Define constants for copy text based on user type
  const STUDENT_COPY = {
    heading: "Pay Fees Easily with Credit Card!",
    subheading:
      "Lowest fee for students. Zero-cost payments for tutors. Fast, secure, and RBI-regulated.",
  };

  const TUTOR_COPY = {
    heading: "Accept Payments at 0 cost",
    subheading:
      "Receive payments via Credit Card, EMI, and UPI at zero cost to you – Get paid directly to your bank account, hassle-free!",
  };

  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ height: "clamp(400px, 80vh, 600px)" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center pt-16 gap-12 md:gap-0 pb-16 md:pb-0">
        <div className="order-2 md:order-1 flex flex-col w-full md:w-4/6">
          <TypographyHeading
            text1={isStudent ? STUDENT_COPY.heading : TUTOR_COPY.heading}
            text2={isStudent ? STUDENT_COPY.subheading : TUTOR_COPY.subheading}
            className={isLoaded ? "animate-fadeInUp" : "opacity-0"}
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.anonymous.eiraapp&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:cursor-pointer ${isLoaded ? "animate-fadeIn" : "opacity-0"}`}
          >
            <img
              src="assets/play-store.svg"
              alt="Play Store"
              className="
    max-w-full mt-12 ml-2 hover:cursor-pointer
    w-[clamp(120px,40%,180px)]     /* mobile-first ↓ */
    sm:w-[clamp(140px,45%,220px)] /* ≥ 640 px restores original range */
  "
            />
          </a>
        </div>
        
        <div className="order-1 md:order-2 relative">
          <img
            src={isStudent ? "assets/student.svg" : "assets/tutor.svg"}
            alt="eira tutor"
            className={`
      max-w-full
      w-[clamp(320px,70%,450px)]     /* phones → medium tablets */
      md:w-[clamp(450px,85%,650px)]  /* ≥ 768 px keeps the original look */
      ${isLoaded ? "animate-fadeIn" : "opacity-0"}
      ${isStudent ? "md:ml-8" : ""}  /* Add margin for student image */
    `}
          />
          {isStudent ? (
            <>
              <img
                src="assets/student-bubble-1.svg"
                alt="eira student"
                style={{
                  transform: !isMobile ? `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` : 'none',
                  visibility: showBubbles ? 'visible' : 'hidden',
                  opacity: showBubbles ? 1 : 0
                }}
                className="max-w-full absolute top-44 -left-10 sm:-left-20 w-[clamp(120px,55%,450px)] transition-transform duration-200 ease-out animate-fadeInBubble"
              />

              <img
                src="assets/student-bubble-2.svg"
                alt="eira student"
                style={{ 
                  width: "clamp(120px, 60%, 450px)",
                  transform: !isMobile ? `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` : 'none',
                  visibility: showBubbles ? 'visible' : 'hidden',
                  opacity: showBubbles ? 1 : 0
                }}
                className="max-w-full absolute bottom-0 right-0 transition-transform duration-200 ease-out animate-fadeInBubble"
              />

              <img
                src="assets/student-bubble-3.svg"
                alt="eira student"
                style={{ 
                  width: "clamp(120px, 60%, 450px)",
                  transform: !isMobile ? `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` : 'none',
                  visibility: showBubbles ? 'visible' : 'hidden',
                  opacity: showBubbles ? 1 : 0
                }}
                className="max-w-full absolute top-7 -right-4 transition-transform duration-200 ease-out animate-fadeInBubble"
              />
            </>
          ) : (
            <>
              <img
                src="assets/tutor-bubble-1.svg"
                alt="eira tutor"
                style={{
                  transform: !isMobile ? `translate(${mousePosition.x * 1.5}px, ${mousePosition.y * 1.5}px)` : 'none',
                  visibility: showBubbles ? 'visible' : 'hidden',
                  opacity: showBubbles ? 1 : 0
                }}
                className="max-w-full absolute top-44 -left-10 sm:-left-20 w-[clamp(120px,55%,450px)] transition-transform duration-200 ease-out animate-fadeInBubble"
              />
              <img
                src="assets/tutor-bubble-2.svg"
                alt="eira tutor"
                style={{ 
                  width: "clamp(120px, 60%, 450px)",
                  transform: !isMobile ? `translate(${mousePosition.x * -1}px, ${mousePosition.y * -1}px)` : 'none',
                  visibility: showBubbles ? 'visible' : 'hidden',
                  opacity: showBubbles ? 1 : 0
                }}
                className="max-w-full absolute bottom-0 right-0 transition-transform duration-200 ease-out animate-fadeInBubble"
              />

              <img
                src="assets/tutor-bubble-3.svg"
                alt="eira tutor"
                style={{ 
                  width: "clamp(115px, 50%, 425px)",
                  transform: !isMobile ? `translate(${mousePosition.x * 2}px, ${mousePosition.y * 2}px)` : 'none',
                  visibility: showBubbles ? 'visible' : 'hidden',
                  opacity: showBubbles ? 1 : 0
                }}
                className="max-w-full absolute top-7 -right-4 transition-transform duration-200 ease-out animate-fadeInBubble"
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
