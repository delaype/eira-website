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
          <img
            src="app/assets/play-store.svg"
            alt="play store"
            className="max-w-full mt-10 ml-2"
            style={{ width: "clamp(100px, 30%, 200px)" }}
          />
        </div>
        <div className="flex justify-center">
          <img
            src={isStudent ? "app/assets/student.svg" : "app/assets/tutor.svg"}
            alt="eira tutor"
            className="max-w-full"
            style={{ width: "clamp(400px, 80%, 600px)" }}
          />
        </div>
      </div>
    </section>
  );
}
