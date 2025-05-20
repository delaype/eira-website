import NavBar from "~/components/layout/NavBar";
import FooterSection from "~/components/layout/FooterSection";

export default function TermsOfUse() {
  return (
    <div
      style={{
        width: "clamp(600px, 90%, 1400px)",
        margin: "0 auto",
      }}
    >
      <NavBar isToggleVisible={false} />
      <div className="mx-auto py-16 sm:px-6 lg:px-8">
        {/* ───── Page Title ───── */}
        <div className="mb-16 text-center">
          <div className="text-primary-600 text-3xl leading-tight">
            Terms&nbsp;of&nbsp;Use
          </div>
          <p className="mt-2 text-base text-neutral-700">
            Effective&nbsp;Date:&nbsp;01/01/2025
          </p>
        </div>

        {/* ───── Terms Body ───── */}
        <section className="space-y-8">
          {/* Teacher <> Platform Section */}
          <div className="text-4xl font-semibold text-neutral-900 text-center mb-8">
            Teacher &lt;&gt; Platform
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            This Agreement (&quot;Agreement&quot;) is made and entered into by
            and between Matiera Technologies Private Limited, a company
            incorporated under the laws of India with its registered office at
            29 RR Road Ghaziabad 201001 (&quot;Company&quot;), and the
            undersigned service provider (&quot;Provider&quot;).
          </p>

          {/* Terms Applicable to All Providers */}
          <div className="text-lg font-semibold text-neutral-900">
            TERMS APPLICABLE TO ALL PROVIDERS
          </div>

          {/* Eligibility and Representation */}
          <div className="text-base font-medium text-neutral-800">
            Eligibility and Representation
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              You represent to the Company that you are an entity who has the
              capacity to contract in law and hold all the qualifications and
              other prerequisites specified by the Company for enrollment as a
              Provider on the Platform.
            </li>
            <li>
              You unconditionally represent and warrant to the Company that you
              have made available to the Company all the information, documents,
              and other material regarding your qualification to provide the
              Service, and no information has been withheld in this regard. You
              also represent to the Company that all the information, documents,
              and other material submitted by you to the Company for its
              verification are accurate and complete.
            </li>
            <li>
              You hereby represent and warrant to the Company that by providing
              the Service and complying with the conditions hereunder will not
              result in (i) a breach of or default under any contract to which
              you are a party; or (ii) a violation of any applicable laws. For
              Institutes, Companies, or any legally registered entities signing
              up on the Platform, the individual signing up shall be deemed to
              have the authority to represent and bind the concerned entity to
              the terms hereof.
            </li>
          </ul>

          {/* Independent Contractor Status */}
          <div className="text-base font-medium text-neutral-800">
            Independent Contractor Status
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You agree that you have registered on this Platform as an
            independent freelancer or consultant, and nothing contained in the
            Terms of Service or elsewhere shall give rise to an
            employer-employee relationship between the Company and you.
          </p>

          {/* Service Performance */}
          <div className="text-base font-medium text-neutral-800">
            Service Performance
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You agree to perform the Services in a professional manner meeting
            the expectation of the students in terms of quality. We may
            regularly update qualifications and other eligibility conditions
            with respect to the Services from time to time, and these shall be
            strictly adhered to by you.
          </p>

          {/* Platform as an E-commerce Provider */}
          <div className="text-base font-medium text-neutral-800">
            Platform as an E-commerce Provider
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You agree and acknowledge that the Company is only an e-commerce
            provider enabling students to interact with teachers and allowing
            teachers to render their services through us. The Company shall not,
            in any manner whatsoever, be held liable or responsible for any
            matters in connection with the provision of the Service itself
            conducted either online or face-to-face at a location decided by
            mutual consent between the Provider and the Student. The Company
            makes no representation or undertakes no responsibility with respect
            to any Student or the requirements of any Student.
          </p>

          {/* Legal Binding */}
          <div className="text-base font-medium text-neutral-800">
            Legal Binding
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You agree and understand that these terms and conditions are legally
            binding and enforceable against you. Please do not use this Platform
            if any of the terms set out herein are not acceptable to you. You
            shall indemnify and hold harmless the Company from any and all
            expenses that may be incurred by it as a result of your breach of
            any of the obligations set out hereunder.
          </p>

          {/* No Guaranteed Enquiries or Payments */}
          <div className="text-base font-medium text-neutral-800">
            No Guaranteed Enquiries or Payments
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            The Company does not underwrite a guaranteed number of enquiries or
            demo bookings to Providers. The Company also does not guarantee any
            number of student payments or conversions from the enquiries shared
            with the registered Providers.
          </p>

          {/* Restrictions on Registration */}
          <div className="text-base font-medium text-neutral-800">
            Restrictions on Registration
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            The Company does not allow registration for home tuition agencies
            and organizations that are engaged in providing products or services
            similar to that of the Company or who are engaged in the collection
            of data from the Website and sharing/utilizing it for the benefit of
            competitors. If there are any such registrations, the Company
            reserves the right to terminate those accounts without any prior
            notice and without processing the refund of the paid subscription
            fee, if any, associated with those accounts. The Company also
            reserves the right to initiate any legal proceedings if any home
            tuition agencies or organizations contravene conditions as stated
            above.
          </p>

          {/* Non-Refundable Payments */}
          <div className="text-base font-medium text-neutral-800">
            Non-Refundable Payments
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You may clarify your doubts before you make a payment for any
            Membership Plan or Services offered by the Company. Once a payment
            is made, it cannot be refunded.
          </p>

          {/* Copyright Protection for Training Content */}
          <div className="text-base font-medium text-neutral-800">
            Copyright Protection for Training Content
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              The Company will not use any Training Content uploaded by you on
              the Platform for any commercial purpose or otherwise without
              seeking explicit permission from you as and when required.
            </li>
            <li>
              The Company can use the content for marketing their services or
              the services of the Providers.
            </li>
            <li>
              The Company may request you to upload your training content on the
              Platform for the sole reason of making your experience of
              conducting tuition classes online on the Platform more seamless
              and hassle-free.
            </li>
            <li>
              By uploading any content on the Platform, you also warrant that
              you own the copyright for that content. Any plagiarized content,
              once noticed by our Audit Team or Users, will be liable to be
              removed from the Platform with or without any notice to you. For
              any liabilities arising out of your usage of plagiarized content,
              you shall be solely responsible and liable for the claims arising
              out of such legal proceedings.
            </li>
          </ul>

          {/* PAYMENT TERMS */}
          <div className="text-lg font-semibold text-neutral-900">
            PAYMENT TERMS
          </div>

          {/* Fees and Deductions */}
          <div className="text-base font-medium text-neutral-800">
            Fees and Deductions
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              You agree to pay to the Company any fees determined by the Company
              at the time of signing up for the Services.
            </li>
            <li>
              The Company will deduct TCS/TDS based on laws and policies laid
              out in the GST TDS policy.
            </li>
            <li>
              The Company will settle all money in your account at T+1 after
              deducting all necessary deductions.
            </li>
          </ul>

          {/* Acceptance */}
          <div className="text-base font-medium text-neutral-800">
            Acceptance
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            By using MATeira&apos;s platform Eira.club – you accept all terms
            and conditions. Please stop using the platform if you do not agree
            to any of the terms mentioned above.
          </p>

          {/* Student <> Platform Section */}
          <div className="text-4xl font-semibold text-neutral-900 text-center mb-8">
            Student &lt;&gt; Platform
          </div>

          {/* Terms Applicable to Students */}
          <div className="text-lg font-semibold text-neutral-900">
            Terms Applicable to Students Engaging with Any Teacher Partner
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              This agreement between you (&quot;Student&quot; or
              &quot;you&quot;) and Mateira Technologies Private Limited
              (&quot;Company&quot; or &quot;we&quot;) may be terminated or
              modified by the Company at any time. If you do not agree to any
              new or modified terms and conditions, you may choose to leave the
              Platform.
            </li>
            <li>
              You agree and acknowledge that the Company is only an aggregator
              of service providers. The Company owns and operates a platform
              (&quot;Platform&quot;) for Teacher Partners
              (&quot;Providers&quot;) to connect with prospective students
              and/or their parents or guardians (User&apos;s). The Company shall
              not, in any manner whatsoever, be held liable or responsible for
              any matters in connection with the provision of the Service itself
              at the premises of the concerned student or during an online
              session (as the case may be).
            </li>
            <li>
              While the Company follows a screening process to ensure that the
              Providers are qualified to provide the Service, the Company makes
              no representation or undertakes no responsibility with respect to
              the proficiency, qualification, skills, or conduct of any Teacher
              Partner. You may use the Service at your own risk and
              responsibility after interacting with the Teacher Partners and
              conducting your own due diligence.
            </li>
            <li>
              You agree and acknowledge that the Company has no control over the
              fee charged by a particular Provider for the services provided, or
              any change in such fee.
            </li>
            <li>
              You agree and understand that these terms and conditions are
              legally binding and enforceable against you. Please do not use
              this Platform if any of the terms set out herein are not
              acceptable to you. You shall indemnify and hold harmless the
              Company from any and all expenses that may be incurred by it as a
              result of your breach of any of the obligations set out hereunder.
            </li>
            <li>
              The Company charges a platform fee for payment processing only on
              certain payment modes.
            </li>
          </ul>

          {/* Company Name */}
          <div className="text-base font-medium text-neutral-800">
            Company Name
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira Technologies Private Limited
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
