import { TypographyTypeIII } from "../typography/TypographyTypeIII";

export default function FeaturesSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <article className="bg-white rounded-2xl overflow-hidden  flex flex-col">
          {/* image box */}
          <div className="w-full h-65 overflow-hidden mb-5">
            <img
              src="/app/assets/feature-1.svg"
              alt="Verification Successful"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* text */}
          <TypographyTypeIII
            text1="Instant Onboarding"
            text2="Sign up and Verify Aadhar in 2 steps, and start receiving payments from your students. Enjoy instant settlement of funds post verification at 0 cost."
          />
        </article>

        {/* Card 2 */}
        <article className="bg-white rounded-2xl overflow-hidden  flex flex-col">
          <div className="w-full h-65 overflow-hidden mb-5">
            <img
              src="/app/assets/feature-2.svg"
              alt="Create and Share Payment Links"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <TypographyTypeIII
            text1="Create and Share Payment Links"
            text2="Create a payment link and share it with your students. They can pay you directly through the link."
          />
        </article>

        {/* Card 3 */}
        <article className="bg-white rounded-2xl overflow-hidden flex flex-col">
          <div className="w-full h-65 overflow-hidden mb-5">
            <img
              src="/app/assets/feature-3.svg"
              alt="Track Payments"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <TypographyTypeIII
            text1="Track Payments"
            text2="Keep a clear record of all transactions. Both students and tutors can easily track payments, ensuring transparency and financial control."
          />
        </article>
      </div>
    </section>
  );
}
