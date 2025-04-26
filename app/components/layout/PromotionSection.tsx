import { TypographyTypeII } from "../typography/TypographyTypeII";

interface PromotionSectionProps {
  isStudent: boolean;
}

export default function PromotionSection({ isStudent }: PromotionSectionProps) {
  return (
    <section
      className="
    grid grid-cols-1 md:grid-cols-3      /* ⇢ 1-col stack on mobile, 3-col on ≥ md */
    gap-y-12 md:gap-x-2                  /* vertical breathing room on mobile     */
    py-24 mt-10
  "
    >
      {/* ───────────────────  1) Heading / intro copy  ─────────────────── */}
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

      {/* ───────────────────  2) Phone + backdrop circle  ─────────────────── */}
      <div className="justify-self-center md:col-start-2 md:row-start-2">
        <div
          className="
    relative
    w-[clamp(20rem,100vw,60rem)]   /* phones → bigger (min 20 rem)  */
    h-[clamp(20rem,100vw,60rem)]
    sm:w-[clamp(16rem,70vw,50rem)] /* ≥ 640 px reverts to old values */
    sm:h-[clamp(16rem,70vw,40rem)]
  "
        >
          {/* ⬤  outer ring lives in your SVG / BG  */}

          <img
            src={
              isStudent
                ? "assets/eira-phone-background-student.svg"
                : "assets/eira-phone-background-tutor.svg"
            }
            alt="App screenshot"
            className="
      absolute top-1/2 left-1/2
      -translate-x-1/2 -translate-y-1/2
    "
          />
        </div>
      </div>

      {/* ───────────────────  3) Sub-title / secondary copy  ─────────────────── */}
      <div className="md:col-start-3 md:row-start-3 md:place-self-end md:text-right">
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
