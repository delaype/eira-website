import { TypographyTypeI } from "../typography/TypographyTypeI";

export default function SecuritySection() {
  return (
    <section className="py-16">
      <div className="bg-primary-10 rounded-2xl p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: security illustration */}
          <div className="flex justify-center lg:justify-start">
            <img
              src="assets/security.svg"
              alt="Security shield"
              className="
      w-[clamp(20rem,95vw,40rem)]   /* mobile-first: bigger (min 20 rem, up to 80 vw) */
      sm:w-[clamp(16rem,65vw,30rem)]/* ≥ 640 px: revert to original curve            */
      h-auto
    "
            />
          </div>

          {/* Right: heading, copy, partners */}
          <div className="space-y-6">
            <TypographyTypeI
              text1="Built to be secure"
              text2="Your Security is Our Priority"
              text5="With partnerships with top banks and RBI-regulated payment aggregators, every transaction is safeguarded. Enjoy peace of mind knowing your financial information is fully protected."
            />

            <p className="text-gray-600 font-medium text-[14px] sm:text-sm">
              Partnered with:
            </p>
            <div className="flex items-center space-x-8">
              <img
                src="assets/yes-bank-logo.svg"
                alt="Yes Bank"
                className="w-full sm:w-auto object-contain"
              />
              <img
                src="assets/cashfree-logo.svg"
                alt="Cashfree Payments"
                className="w-full sm:w-auto object-contain"
              />
            </div>

            <p className="text-gray-400 text-[14px] sm:text-xs">
              **Cashfree is a RBI regulated payment aggregator
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
