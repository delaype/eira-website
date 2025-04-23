import { TypographyTypeII } from "../typography/TypographyTypeII";

interface PromotionSectionProps {
  isStudent: boolean;
}

export default function PromotionSection({ isStudent }: PromotionSectionProps) {
  return (
    <section className="grid grid-cols-3 md:grid-cols-3 gap-4 py-24 mt-10">
      {/* Define constants for copy text based on user type */}
      {/* 1) Heading */}
      <div className="md:col-start-1 md:row-start-1">
        {isStudent ? (
          <TypographyTypeII
            text1="Choose from multiple payment modes"
            text2="Pay your education fees directly from your credit card at just 1% fee—saving money with every transaction."
          />
        ) : (
          <TypographyTypeII
            text1="Multiple Payment Modes"
            text2="Offer your students through popular modes of payments, including EMI and UPI"
          />
        )}
      </div>

      {/* 2) Circle + phone */}
      <div className="md:col-start-2 md:row-start-2 justify-self-center">
        <div
          className="
        relative 
        w-[clamp(16rem,50vw,24rem)] 
        h-[clamp(16rem,50vw,24rem)] 
      "
        >
          {/* outer ring */}
          <div className="absolute -inset-[50%] border-2 border-blue-100 opacity-30 rounded-full bg-blue-100" />

          {/* phone screenshot */}
          <img
            src={
              isStudent
                ? "assets/eira-phone-background-student.svg"
                : "assets/eira-phone-background-tutor.svg"
            }
            alt="App screenshot"
            className="
          absolute 
          top-1/2 left-1/2 
          w-[clamp(10rem,100%,50rem)] 
          transform -translate-x-1/2 -translate-y-1/2
        "
          />
        </div>
      </div>

      {/* 3) Sub-title */}
      <div className="md:col-start-3 md:row-start-3 place-self-end text-right">
        {isStudent ? (
          <TypographyTypeII
            text1="Credit card to bank account at 1%"
            text2="Receive payments directly in your bank account at 0% cost with instant settlements and robust security."
          />
        ) : (
          <TypographyTypeII
            text1="Instant Settlement"
            text2="Receive your payments directly in your bank account at 0% cost."
          />
        )}
      </div>
    </section>
  );
}
