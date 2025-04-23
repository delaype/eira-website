import { TypographyHeading } from "../typography/TypographyHeading";

interface HeroSectionProps {
  isStudent: boolean;
}

export default function HeroSection({ isStudent }: HeroSectionProps) {
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

  // Select the appropriate copy based on isStudent prop
  return (
    <section
      className="flex flex-col items-center justify-center"
      style={{ height: "clamp(300px, 70vh, 500px)" }}
    >
      <div className="grid grid-cols-2 items-center pt-12">
        <div className="flex flex-col w-4/6">
          <TypographyHeading
            text1={isStudent ? STUDENT_COPY.heading : TUTOR_COPY.heading}
            text2={isStudent ? STUDENT_COPY.subheading : TUTOR_COPY.subheading}
          />
          <a
            href="https://play.google.com/store/apps/details?id=com.anonymous.eiraapp&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <img
              src="assets/play-store.svg"
              alt="play store"
              className="max-w-full mt-10 ml-2 hover:cursor-pointer"
              style={{ width: "clamp(100px, 40%, 200px)" }}
            />
          </a>
        </div>
        <div className="flex justify-center relative">
          <img
            src={isStudent ? "assets/student.svg" : "assets/tutor.svg"}
            alt="eira tutor"
            className="max-w-full"
            style={{ width: "clamp(400px, 80%, 600px)" }}
          />
          {isStudent ? (
            <>
              <img
                src="assets/student-bubble-1.svg"
                alt="eira student"
                className="max-w-full absolute top-10 -left-20"
                style={{ width: "clamp(100px, 50%, 400px)" }}
              />
              <img
                src="assets/student-bubble-2.svg"
                alt="eira student"
                className="max-w-full absolute bottom-10 -right-50"
                style={{ width: "clamp(100px, 55%, 400px)" }}
              />
            </>
          ) : (
            <>
              <img
                src="assets/tutor-bubble-1.svg"
                alt="eira tutor"
                className="max-w-full absolute top-10 -left-20"
                style={{ width: "clamp(100px, 50%, 400px)" }}
              />
              <img
                src="assets/tutor-bubble-2.svg"
                alt="eira tutor"
                className="max-w-full absolute bottom-10 -right-50"
                style={{ width: "clamp(100px, 55%, 400px)" }}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
