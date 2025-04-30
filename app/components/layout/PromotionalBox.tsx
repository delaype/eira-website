import { TypographyTypeI } from "../typography/TypographyTypeI";

interface PromotionalBoxProps {
  isStudent: boolean;
}

export default function PromotionalBox({ isStudent }: PromotionalBoxProps) {
  return (
    <section className="py-16">
      <div className="bg-primary-10 rounded-2xl py-6 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 overflow-hidden">
        {/* Left: text + Google Play badge */}
        <div className="space-y-10">
          <TypographyTypeI
            text1="Join Us"
            text2="Ready for a Smarter Way to Manage Your Payments?"
            text5="Join the Eira.club community today—where education fees are paid easily, and payments are received instantly."
          />

          <a
            href="https://play.google.com/store/apps/details?id=com.anonymous.eiraapp&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md hover:shadow-primary-200 hover:bg-primary-50"
          >
            <img
              src="assets/play-store.svg"
              alt="Get it on Google Play"
              className="w-32 md:w-40 lg:w-48 my-10"
            />
          </a>
        </div>

        {/* Right: person holding phone */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={isStudent ? "assets/student-2.svg" : "assets/tutor-2.svg"}
            alt="Person holding a phone showing the app"
            className="
    w-[clamp(20rem,90vw,34rem)]      /* mobile-first: larger — min 20 rem, up to 70 vw */
    sm:w-[clamp(16rem,50vw,34rem)]   /* ≥ 640 px: restore original sizing curve        */
    -mr-14 -mb-8
  "
          />
        </div>
      </div>
    </section>
  );
}
