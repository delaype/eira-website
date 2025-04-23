import { TypographyHeading } from "~/components/typography/TypographyHeading";
import { TypographyTypeI } from "~/components/typography/TypographyTypeI";
import { TypographyTypeII } from "~/components/typography/TypographyTypeII";
import { TypographyTypeIII } from "~/components/typography/TypographyTypeIII";

export default function TypographyDemo() {
  return (
    <div className="p-8 space-y-12">
      <h1 className="text-3xl font-bold text-neutral-900 mb-8">
        Typography Components Demo
      </h1>

      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-neutral-900">
          TypographyTypeI Examples
        </h2>
        <div className="p-6 border border-neutral-300 rounded-lg">
          <TypographyTypeI
            text1="How it works"
            text2="Built for educational payments"
            text3="Lowest fee for students. Zero-cost payments for tutors. Fast, secure, and RBI-regulated."
            text4="We serve over 10,000 customer across different platforms"
            text5="With partnerships with top banks and RBI-regulated payment aggregators, every transaction is safeguarded. Enjoy peace of mind knowing your financial information is fully protected."
          />
        </div>
        <div className="p-6 border border-neutral-300 rounded-lg">
          <TypographyTypeII
            text1="Choose from multiple payment methods"
            text2="Pay your education fees directly from your credit card at just 1% fee—saving money with every transaction."
          />
        </div>
        <div className="p-6 border border-neutral-300 rounded-lg">
          <TypographyTypeIII
            text1="Free Payment Using UPI"
            text2="Students can take advantage of free UPI payments, providing an alternative, cost-effective way to manage fee payments."
          />
        </div>
        <div className="p-6 border border-neutral-300 rounded-lg">
          <TypographyHeading
            text1="Accept payments at 0 cost"
            text2="Receive payments via Credit Card, EMI, and UPI at zero cost to you – Get paid directly to your bank account, hassle-free!"
          />
        </div>
      </section>
    </div>
  );
}
