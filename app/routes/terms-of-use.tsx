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
          {/* 1 */}
          <div className="text-base font-medium text-neutral-800">
            1&nbsp;·&nbsp;Acceptance&nbsp;of&nbsp;Terms
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            By using Mateira Technologies Private Limited (
            <strong>“Mateira”</strong>) services, you confirm that you are at
            least 18&nbsp;years old or are using the platform under the
            supervision of a parent or legal guardian. You agree to comply with
            all applicable laws, regulations and these Terms.
          </p>

          {/* 2 */}
          <div className="text-base font-medium text-neutral-800">
            2&nbsp;·&nbsp;User&nbsp;Accounts
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Certain features require registration with a valid email address.
            You are responsible for safeguarding account credentials and all
            activities under your account. Notify Mateira immediately of any
            unauthorised access or use.
          </p>

          {/* 3 */}
          <div className="text-base font-medium text-neutral-800">
            3&nbsp;·&nbsp;Access&nbsp;&&nbsp;Use&nbsp;of&nbsp;Services
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            You agree to use Mateira services only for lawful purposes and in
            accordance with these Terms. Mateira may suspend or terminate access
            for violations or misuse.
          </p>

          {/* 4 */}
          <div className="text-base font-medium text-neutral-800">
            4&nbsp;·&nbsp;Intellectual&nbsp;Property
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            All content—including text, graphics, software and code—is the
            property of Mateira or its licensors and protected by
            intellectual-property laws. Reproduction or distribution without
            written consent is prohibited.
          </p>

          {/* 5 */}
          <div className="text-base font-medium text-neutral-800">
            5&nbsp;·&nbsp;Payments&nbsp;&&nbsp;Fees
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            All payments are governed by our Payment Policy. Mateira may modify
            pricing or fee structures at any time. Platform fees are
            non-refundable. Refunds, where applicable, follow the Refund Policy.
          </p>

          {/* 6 */}
          <div className="text-base font-medium text-neutral-800">
            6&nbsp;·&nbsp;Cancellations&nbsp;&&nbsp;Refunds
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira does not allow cancellations once a session is confirmed.
            Verify all details before payment. No-show and refund eligibility
            are detailed in the Refund Policy.
          </p>

          {/* 7 */}
          <div className="text-base font-medium text-neutral-800">
            7&nbsp;·&nbsp;User&nbsp;Conduct
          </div>
          <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-neutral-700">
            <li>Provide accurate information—no misrepresentation.</li>
            <li>Do not disrupt or interfere with the platform.</li>
            <li>Avoid uploading harmful content (viruses, malware, etc.).</li>
            <li>Respect intellectual-property and privacy rights of others.</li>
          </ul>

          {/* 8 */}
          <div className="text-base font-medium text-neutral-800">
            8&nbsp;·&nbsp;Role-Based&nbsp;Access
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Users operate within teams/tenants, each with a role hierarchy.
            Access permissions follow the role assigned in each team; users may
            belong to multiple teams simultaneously.
          </p>

          {/* 9 */}
          <div className="text-base font-medium text-neutral-800">
            9&nbsp;·&nbsp;Data&nbsp;Privacy&nbsp;&&nbsp;Security
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Your data is handled in accordance with our Privacy Policy. Mateira
            employs industry-standard security measures to protect user
            information.
          </p>

          {/* 10 */}
          <div className="text-base font-medium text-neutral-800">
            10&nbsp;·&nbsp;Modifications&nbsp;&&nbsp;Updates
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira may alter these Terms at any time. Changes take effect upon
            posting; continued use signifies acceptance of the revised Terms.
          </p>

          {/* 11 */}
          <div className="text-base font-medium text-neutral-800">
            11&nbsp;·&nbsp;Termination
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira may suspend or terminate your account or access at its
            discretion, with or without notice, for behaviour that violates
            these Terms or harms other users or Mateira.
          </p>

          {/* 12 */}
          <div className="text-base font-medium text-neutral-800">
            12&nbsp;·&nbsp;Disclaimers&nbsp;&&nbsp;Limitation&nbsp;of&nbsp;Liability
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Mateira services are provided “as is” without warranties. Mateira is
            not liable for indirect, incidental or consequential damages arising
            from platform use.
          </p>

          {/* 13 */}
          <div className="text-base font-medium text-neutral-800">
            13&nbsp;·&nbsp;Governing&nbsp;Law
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            These Terms are governed by Indian law. Disputes fall under the
            exclusive jurisdiction of the courts in New&nbsp;Delhi, India.
          </p>

          {/* 14 */}
          <div className="text-base font-medium text-neutral-800">
            14&nbsp;·&nbsp;Contact&nbsp;Us
          </div>
          <p className="text-base leading-relaxed text-neutral-700">
            Questions or concerns? Email&nbsp;
            <a
              href="mailto:support@mateira.com"
              className="text-primary-600 underline hover:text-primary-500"
            >
              support@mateira.com
            </a>{" "}
            or call&nbsp;+91&nbsp;98731&nbsp;89338.
          </p>
        </section>
      </div>
      <FooterSection />
    </div>
  );
}
