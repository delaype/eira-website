import { TypographyTypeIII } from "../typography/TypographyTypeIII";

export default function FeaturesSection() {
  const imageBoxStyles =
    "w-full h-[clamp(120px,15vw,260px)] sm:h-65 overflow-hidden mb-5";
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <article className="bg-white rounded-2xl overflow-hidden  flex flex-col">
          {/* image box */}
          <div className={imageBoxStyles}>
            <img
              src="assets/feature-1.svg"
              alt="Verification Successful"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* text */}
          <TypographyTypeIII
            text1="Instant Onboarding"
            text3="You can get started in just 2 steps. Sign up and verify your Aadhar card, and start using Eira."
          />
        </article>

        {/* Card 2 */}
        <article className="bg-white rounded-2xl overflow-hidden  flex flex-col">
          <div className={imageBoxStyles}>
            <img
              src="assets/feature-2.svg"
              alt="Create and Share Payment Links"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <TypographyTypeIII
            text1="Create and Share Payment Links"
            text3="We make it easy to receive tuition fees from your students. Just share the link after the class, and they can pay you directly through the link."
          />
        </article>

        {/* Card 3 */}
        <article className="bg-white rounded-2xl overflow-hidden flex flex-col">
          <div className={imageBoxStyles}>
            <img
              src="assets/feature-3.svg"
              alt="Track Payments"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <TypographyTypeIII
            text1="Track Everything"
            text3="Track your classes, payments, and everything in between, all in one place."
          />
        </article>
        <article className="bg-white rounded-2xl overflow-hidden flex flex-col">
          <div className={imageBoxStyles}>
            <img
              src="assets/feature-4.png"
              alt="Search Tutors"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <TypographyTypeIII
            text1="Search Tutors"
            text3="Easily schedule classes with any kyc verified tutor from Eira's network."
          />
        </article>
      </div>
    </section>
  );
}
