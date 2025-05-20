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
            At Mateira Technologies Private Limited, we value your privacy and
            strive to protect your personal information. This Privacy Notice
            describes how Mateira Technologies Private Limited and its
            affiliates collect and process your personal information through our
            websites, devices, products, services, online marketplace, and
            applications (collectively, &quot;Mateira Services&quot;).
          </p>

          <p className="text-base leading-relaxed text-neutral-700">
            By using Mateira Services, you agree to our use of your personal
            information in accordance with this Privacy Notice. We may amend
            this Privacy Notice from time to time, and your continued use of
            Mateira Services constitutes your acceptance of any such amendments.
          </p>

          {/* Sub-section */}
          <div className="text-base font-medium text-neutral-800">
            Collection of Information
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We collect personal information from you to provide and improve our
            products and services. This information includes:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              <strong>Information You Give Us&nbsp;—</strong>&nbsp;We receive
              and store any information you provide to us, such as your name,
              address, phone number, and email address.
            </li>
            <li>
              <strong>Automatic Information&nbsp;—</strong>&nbsp;We
              automatically collect and store certain types of information about
              your use of Mateira Services, such as your interaction with
              content and services.
            </li>
            <li>
              <strong>Information from Other Sources&nbsp;—</strong>&nbsp;We may
              receive information about you from other sources, such as updated
              delivery and address information.
            </li>
          </ul>

          <div className="text-base font-medium text-neutral-800">
            Purpose and Use of Information
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We use your personal information to operate, provide, develop, and
            improve our products and services. This includes:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>Purchase and delivery of products and services</li>
            <li>Provide, troubleshoot, and improve Mateira Services</li>
            <li>Recommendations and personalisation</li>
            <li>Compliance with legal obligations</li>
            <li>Communication with you</li>
            <li>Advertising</li>
            <li>Fraud prevention and credit risks</li>
          </ul>

          <div className="text-base font-medium text-neutral-800">
            Cookies and other identifiers
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            To enable our systems to recognize your browser or device and
            provide and improve Mateira Services, we use cookies and other
            identifiers. For more information about cookies and how we use them,
            please read our Cookies Notice.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Does Mateira Share Your Personal Information?
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We do not sell your personal information to others. We may share
            your personal information with third parties in certain
            circumstances, such as transactions involving third parties or to
            comply with legal obligations.
          </p>

          <div className="text-base font-medium text-neutral-800">
            How Secure Is Information About Me?
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We design our systems with your security and privacy in mind. We use
            encryption protocols and software to protect the security of your
            personal information during transmission.
          </p>

          <div className="text-base font-medium text-neutral-800">
            What About Advertising?
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            We may use your personal information to display interest-based ads
            for features, products, and services that might be of interest to
            you. We do not use information that personally identifies you to
            display interest-based ads.
          </p>

          <div className="text-base font-medium text-neutral-800">
            What Information Can I Access?
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You can access your information, including your name, address,
            payment options, profile information, and purchase history, in the
            &quot;Your Account&quot; section of our website or mobile
            application.
          </p>

          <div className="text-base font-medium text-neutral-800">
            What Choices Do I Have?
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You can choose not to provide certain information, but then you
            might not be able to take advantage of many of our services. You can
            also adjust your communication preferences and opt out of
            interest-based advertising.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Are Children Allowed to Use Mateira Services?
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira Services are not intended for children under the age of 18.
            If you are under 18, you may use Mateira Services only with the
            involvement of a parent or guardian.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Conditions of Use, Notices, and Revisions
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Your use of Mateira Services is subject to this Privacy Notice and
            our Conditions of Use. We may amend this Privacy Notice from time to
            time, and your continued use of Mateira Services constitutes your
            acceptance of any such amendments.
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
            Your payments on Mateira Services is subject to this Payment policy
            and our Conditions of Use. We may amend this Payment Policy from
            time to time, and your continued use of Mateira Services constitutes
            your acceptance of any such amendments.
          </p>

          <p className="text-base leading-relaxed text-neutral-700">
            The payments made on Mateira Services shall be in the range of INR 1
            to INR 10,000. Also, Mateira will charge platform fees in the range
            of 1%-5% of the transaction volume. These charges can vary over the
            time and Mateira Services holds all the rights to change it as and
            when required.
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
              <span className="font-medium">
                Class Completion Verification&nbsp;—
              </span>
              &nbsp;After the completion of each scheduled class, the student
              will receive a prompt to confirm whether the class took place. The
              student must respond to this prompt within 24 hours of receiving
              it.
            </li>
            <li>
              <span className="font-medium">No-Show Refund&nbsp;—</span>
              &nbsp;If the student reports that the class did not occur (a
              &quot;no-show&quot;), the platform will verify the no-show claim
              through system logs and attendance tracking features. Upon
              verification, a refund will be issued to the student within 3-5
              business days. The platform fees charged will be non-refundable
              and hence the refunded amount would not have the platform fees
              included.
            </li>
            <li>
              <span className="font-medium">Class Conducted&nbsp;—</span>
              &nbsp;If the student confirms that the class took place, the
              payment will be settled to the teacher&apos;s account within 24
              hours of confirmation. No disputes regarding the occurrence of the
              class will be entertained after the confirmation is received.
            </li>
            <li>
              <span className="font-medium">No Post-Class Refunds&nbsp;—</span>
              &nbsp;Once a class is confirmed to have been conducted by the
              student, no refunds will be allowed. This is to ensure fairness
              and prevent misuse of the refund policy.
            </li>
            <li>
              <span className="font-medium">
                No Refunds for Substandard Classes&nbsp;—
              </span>
              &nbsp;Refunds will not be entertained in cases where students
              consider the class to be of substandard quality or not meeting
              their expectations. Students are encouraged to review teacher
              profiles, ratings, and reviews before booking a class to ensure it
              meets their standards.
            </li>
            <li>
              <span className="font-medium">Dispute Resolution&nbsp;—</span>
              &nbsp;In cases where there is a disagreement between the student
              and the teacher about whether a class took place, Mateira
              Technologies will mediate the dispute. Both parties will be
              required to provide evidence, such as communication logs,
              screenshots, or any other relevant information. Our support team
              will review the evidence and make a final decision within 7
              business days. The decision of the support team will be final and
              binding.
            </li>
            <li>
              <span className="font-medium">Special Circumstances&nbsp;—</span>
              &nbsp;In exceptional cases, such as technical issues on the
              platform&apos;s side or natural disasters, Mateira Technologies
              reserves the right to issue refunds at its discretion. Teachers
              and students will be promptly informed of any such decisions.
            </li>
            <li>
              <span className="font-medium">Contact Information&nbsp;—</span>
              &nbsp;For any questions, concerns, or disputes related to the
              refund policy, please contact our support team at
              support@mateira.com or call us at 9873189338. Our support hours
              are Monday to Friday, 9 AM to 6 PM IST.
            </li>
          </ol>

          <p className="text-base leading-relaxed text-neutral-700">
            Refund timeline: Once we receive the report that the class has not
            been conducted, we would initiate the refund inquiry process. We
            would notify the teacher about the no-show and allow them to defend
            their case in next 24 hours. Post which, upon Mateira&apos;s
            discretion we will either start the refund process or ask for
            further investigation, if the need arises.
          </p>

          <p className="text-base leading-relaxed text-neutral-700">
            Once the refund is initiated, the funds shall generally be reflected
            in the source account of student within 3-7 business days.
          </p>

          <p className="text-base leading-relaxed text-neutral-700">
            By using our platform, you agree to abide by this refund policy. We
            strive to ensure a fair and transparent process for both students
            and teachers to maintain the integrity and trust of our platform.
          </p>
        </section>

        <div className="my-16 h-px w-full bg-neutral-300" />

        {/* ─────────────────── TDS / TCS POLICY ─────────────────── */}
        <section id="tds-tcs-policy" className="space-y-8">
          <div className="text-lg font-semibold text-neutral-900">
            TDS / TCS Policy
          </div>

          <p className="text-base leading-relaxed text-neutral-700">
            Mateira Technologies Private Limited (&quot;Mateira&quot;) is
            committed to ensuring compliance with all applicable tax
            regulations. As an eCommerce operator, we facilitate transactions
            between tutors (service providers) and students (service
            recipients). Below is our policy regarding Tax Collected at Source
            (TCS) and Tax Deducted at Source (TDS) in accordance with the
            relevant government norms and regulations.
          </p>

          <div className="text-base font-medium text-neutral-800">
            GST / TCS Policy:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Note: Mateira only onboards tutors who do not have GST registration.
            Any tutor with GST registration should not use our platform.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Aggregate Turnover and Registration:
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>
              If your aggregate turnover exceeds INR 20,00,000 in a financial
              year (April to March) through any means, you are required to
              register under GST.
            </li>
            <li>
              If you are residing in the following states, GST registration will
              be applicable if your aggregate turnover exceeds INR 10,00,000:
              Manipur, Mizoram, Nagaland, Tripura
            </li>
          </ul>

          <div className="text-base font-medium text-neutral-800">
            TCS Deduction:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            As per government regulations, for any online service undertaken
            through a mediator (in this case, Mateira), an amount of 1% will be
            deducted for every single transaction, per goods or service. The
            amount of 1% is deducted on the payment made by the company for
            every single transaction.
          </p>

          <p className="text-base leading-relaxed text-neutral-700">
            As it is assumed you are a non-GST tutor, no TCS is deducted. If we
            find out you are a GST merchant later, future payouts will be
            withheld to compensate for earlier GST liability.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Example Calculations:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Example Calculation 1 (GST Tutor): If a student pays a total fee of
            INR 10,000 and Mateira&apos;s charges are INR 2,000:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>Total Fee: INR 10,000</li>
            <li>TCS (1%): INR 100</li>
            <li>Company Charges: INR 2,000</li>
            <li>Final Payout to Tutor: INR 7,900</li>
          </ul>

          <p className="text-base leading-relaxed text-neutral-700">
            Example Calculation 2 (Non GST Tutor): If a student pays a total fee
            of INR 10,000 and Mateira&apos;s charges are INR 2,000:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>Total Fee: INR 10,000</li>
            <li>Company Charges: INR 2,000</li>
            <li>Final Payout to Tutor: INR 8000</li>
          </ul>

          <p className="text-base leading-relaxed text-neutral-700">
            As Mateira currently onboards non GST tutors, 2nd example will be in
            force. If in the future, Mateira finds out that a tutor fraudulently
            on boarded onto mateira and has a GST registration. Future Payouts
            will be withheld to compensate for the GST Liability.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Service Limitation:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Our platform will stop providing services and making payouts once a
            tutor&apos;s cumulative earnings reach INR 5,00,000 in a financial
            year. This is to manage the risk of Mateira.
          </p>

          <div className="text-base font-medium text-neutral-800">
            TDS Policy:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Overview of TDS under Section 194O: Section 194O mandates that an
            eCommerce operator is required to deduct TDS for facilitating any
            sale of goods or services through an eCommerce participant. Mateira,
            as an eCommerce operator, will ensure compliance with these
            regulations to the extent applicable.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Scope of Section 194O:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira will deduct TDS @1% if a tutor&apos;s earnings from the
            platform exceed INR 5,00,000 in a financial year.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Example Calculation:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            If a tutor&apos;s total fee from students is INR 10,000 and the
            company&apos;s charges are INR 2,000:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>Total Fee: INR 10,000</li>
            <li>Company Charges: INR 2,000</li>
            <li>Tutor Earnings: INR 8,000</li>
            <li>TDS Deducted: INR 100 (1% of total fee)</li>
            <li>Final Payout: INR 7,900</li>
          </ul>

          <div className="text-base font-medium text-neutral-800">
            Ceiling Limit and Service Suspension:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            To manage the risk of Mateira, our platform will stop services and
            payouts once a tutor&apos;s earnings reach INR 5,00,000 in a
            financial year. As these limits do not require any TDS/TCS, no
            deductions will be made. However, if the risk limits increase, these
            deductions will come into force.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Data Retention and Security:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira will retain necessary data to comply with legal and
            regulatory requirements. We ensure appropriate security measures to
            protect data against unauthorized access.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Grievance Redressal:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            For any grievances or complaints regarding this policy, please
            contact our support team at anjum@delpe.in or call us at 9873189338.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Disclaimer:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Please note that Mateira will not be responsible for any
            non-compliance by tutors regarding their tax obligations. It is the
            responsibility of the tutors to ensure they comply with all
            applicable tax laws and regulations.
          </p>

          <div className="text-base font-medium text-neutral-800">
            Conclusion:
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            This policy ensures that Mateira Technologies Private Limited
            remains compliant with applicable tax regulations while providing a
            secure and efficient platform for non-GST registered tutors.
          </p>
        </section>

        <div className="my-16 h-px w-full bg-neutral-300" />

        {/* ─────────────────── CANCELLATION POLICY ─────────────────── */}
        <section id="cancellation-policy" className="space-y-8 pb-10">
          <div className="text-lg font-semibold text-neutral-900">
            Cancellation Policy
          </div>

          <p className="text-base leading-relaxed text-neutral-700">
            Mateira Technologies Private Limited (&quot;Mateira&quot;)
            doesn&apos;t entertain any cancellations, once the session is
            confirmed. We strictly advice students to cross verify the details
            and make the payment. Payment once made on Mateira&apos;s platform
            will be levied a non-refundable platform fees. In case of no-shows,
            or more details about refunds, please refer to our Refund Policy
            above.
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
