import NavBar from "~/components/layout/NavBar";
import FooterSection from "~/components/layout/FooterSection";

export default function PrivacyPolicy() {
  return (
    <div
      style={{
        width: "clamp(600px, 90%, 1400px)",
        margin: "0 auto",
      }}
    >
      <NavBar isToggleVisible={false} />
      <div className="mx-auto py-16 sm:px-6 lg:px-8">
        {/* PAGE TITLE */}
        <div className="mb-16 text-center">
          <div className="text-primary-600 text-4xl leading-tight">
            Our Policies
          </div>
        </div>

        {/* ─────────────────── PRIVACY POLICY ─────────────────── */}
        <section id="privacy-policy" className="space-y-8">
          {/* Section title */}
          <div className="text-lg font-semibold text-neutral-900">
            Privacy Policy
          </div>

          {/* Body */}
          <p className="text-base leading-relaxed text-neutral-700">
            At Mateira Technologies Private Limited (<strong>“Mateira”</strong>
            ), we value your privacy and strive to protect your personal
            information. This notice explains how we collect and process data
            when you use any of our websites, products, marketplace or
            applications (<strong>“Mateira Services”</strong>).
          </p>

          <p className="text-base leading-relaxed text-neutral-700">
            By continuing to use Mateira Services, you agree to this policy. We
            may update it periodically; your continued use indicates acceptance.
          </p>

          {/* Sub-section */}
          <div className="text-base font-medium text-neutral-800">
            1&nbsp;·&nbsp;Collection&nbsp;of&nbsp;Information
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              <strong>Information you give us&nbsp;—</strong>&nbsp;name,
              address, phone, email.
            </li>
            <li>
              <strong>Automatic information&nbsp;—</strong>&nbsp;details of your
              interaction with Mateira Services.
            </li>
            <li>
              <strong>Information from other sources&nbsp;—</strong>&nbsp;e.g.
              updated delivery details.
            </li>
          </ul>

          <div className="text-base font-medium text-neutral-800">
            2&nbsp;·&nbsp;Purpose&nbsp;&&nbsp;Use
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>Purchase &amp; delivery of products / services</li>
            <li>Provide, troubleshoot &amp; improve Mateira Services</li>
            <li>Personalisation &amp; recommendations</li>
            <li>Legal compliance</li>
            <li>Communication &amp; advertising</li>
            <li>Fraud prevention &amp; credit-risk management</li>
          </ul>

          <div className="text-base font-medium text-neutral-800">
            3&nbsp;·&nbsp;Cookies
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We use cookies and similar identifiers so our systems recognise your
            browser / device. See our Cookies Notice for details.
          </p>

          <div className="text-base font-medium text-neutral-800">
            4&nbsp;·&nbsp;Sharing&nbsp;of&nbsp;Information
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We never sell personal data. We share it only to fulfil
            transactions, comply with law, or protect Mateira and its users.
          </p>

          <div className="text-base font-medium text-neutral-800">
            5&nbsp;·&nbsp;Security
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We apply encryption and industry best-practices to protect
            information during transmission and storage.
          </p>

          <div className="text-base font-medium text-neutral-800">
            6&nbsp;·&nbsp;Advertising
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We may show interest-based ads but never use data that personally
            identifies you to do so.
          </p>

          <div className="text-base font-medium text-neutral-800">
            7&nbsp;·&nbsp;Your&nbsp;Choices
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Manage your profile, addresses and preferences in{" "}
            <strong>Your Account</strong>. You may opt-out of certain
            communications and advertising at any time.
          </p>

          <div className="text-base font-medium text-neutral-800">
            8&nbsp;·&nbsp;Children
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira Services are not intended for anyone under 18; under-18s may
            use them only with a parent or guardian.
          </p>
        </section>

        {/* Divider */}
        <div className="my-16 h-px w-full bg-neutral-300" />

        {/* ─────────────────── PAYMENT POLICY ─────────────────── */}
        <section id="payment-policy" className="space-y-8">
          <div className="text-lg font-semibold text-neutral-900">
            Payment Policy
          </div>

          <p className="text-base leading-relaxed text-neutral-700">
            Payments on Mateira are governed by this policy and our Conditions
            of Use. Transactions may range from&nbsp;₹1 – ₹10,000. A platform
            fee of
            <strong> 1 – 5 %</strong> applies (subject to change).
          </p>
        </section>

        <div className="my-16 h-px w-full bg-neutral-300" />

        {/* ─────────────────── REFUND POLICY ─────────────────── */}
        <section id="refund-policy" className="space-y-8">
          <div className="text-lg font-semibold text-neutral-900">
            Refund Policy
          </div>

          <ol className="list-decimal space-y-3 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              <span className="font-medium">Class verification&nbsp;—</span>
              &nbsp;students have 24 h to confirm whether a scheduled class
              occurred.
            </li>
            <li>
              <span className="font-medium">No-show refund&nbsp;—</span>
              &nbsp;if verified, refund issued in 3-5 business days (platform
              fees are non-refundable).
            </li>
            <li>
              <span className="font-medium">Class conducted&nbsp;—</span>
              &nbsp;once confirmed, payment settles to the teacher within 24 h;
              no later disputes.
            </li>
            <li>No post-class refunds after confirmation.</li>
            <li>No refunds for perceived sub-standard quality.</li>
            <li>Mateira mediates disputes within 7 business days.</li>
            <li>
              <span className="font-medium">Support&nbsp;—</span>&nbsp;
              support@mateira.com&nbsp;|&nbsp;+91 98731 89338
            </li>
          </ol>

          <p className="text-base leading-relaxed text-neutral-700">
            Refunds normally appear in the source account within{" "}
            <strong>3 – 7&nbsp;business days</strong>.
          </p>
        </section>

        <div className="my-16 h-px w-full bg-neutral-300" />

        {/* ─────────────────── TDS / TCS POLICY ─────────────────── */}
        <section id="tds-tcs-policy" className="space-y-8">
          <div className="text-lg font-semibold text-neutral-900">
            TDS / TCS Policy
          </div>

          <p className="text-base leading-relaxed text-neutral-700">
            Mateira complies with Section&nbsp;194O (TDS @ 1 %) when a tutor’s
            earnings exceed ₹5,00,000 per financial year. We onboard only
            non-GST tutors; if GST registration is later discovered, future
            payouts are withheld to cover liability. Services halt once
            cumulative earnings hit ₹5,00,000 (risk management limit).
          </p>
        </section>

        <div className="my-16 h-px w-full bg-neutral-300" />

        {/* ─────────────────── CANCELLATION POLICY ─────────────────── */}
        <section id="cancellation-policy" className="space-y-8 pb-10">
          <div className="text-lg font-semibold text-neutral-900">
            Cancellation Policy
          </div>

          <p className="text-base leading-relaxed text-neutral-700">
            Mateira does not accept cancellations once a session is confirmed.
            All payments are final and include a non-refundable platform fee.
            For no-shows, refer to our Refund Policy.
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
