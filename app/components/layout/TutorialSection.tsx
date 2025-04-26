//import { TypographyTypeIII } from "../typography/TypographyTypeIII";

import { TypographyTypeI } from "../typography/TypographyTypeI";
import { TypographyTypeIII } from "../typography/TypographyTypeIII";

export default function TutorialSection() {
  return (
    <section className="py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* ───────────── Left column ───────────── */}
        <div>
          <TypographyTypeI
            text1="How it works"
            text2="Built for educational payments"
            text3="Lowest fee for students. Zero-cost payments for tutors. Fast, secure, and RBI-regulated."
          />

          <ul className="space-y-8 mt-10">
            {[
              [
                "Signup",
                "Create your account in just a few clicks and join our community of empowered educators.",
              ],
              [
                "Add Bank Account Details",
                "Securely link your bank account to enable instant, fee-free payment transfers.",
              ],
              [
                "Accept Payments",
                "Easily generate and share payment links with students to request education fee payments.",
              ],
            ].map(([title, desc], idx) => (
              <li key={idx} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold">
                    {idx + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <TypographyTypeIII text1={title} text2={desc} />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ───────────── Right column ───────────── */}
        <div className="justify-self-center lg:justify-self-end h-full">
          <div
            className="
          relative 
          w-[clamp(20rem,60vw,32rem)]
          min-h-[clamp(20rem,60vw,32rem)]
          h-full
         bg-primary-10
          rounded-xl
        "
          >
            {/* Phone #1 */}
            <img
              src="assets/eira-app-mobile-1.svg"
              alt="App screen 1"
              className="
    absolute top-1/4 left-1/5
    w-[clamp(10rem,40%,16rem)]     /* ↓ phones & small tablets */
    sm:w-[clamp(12rem,50%,20rem)]  /* ≥ 640 px  restore original range */
    -rotate-6
  "
            />

            {/* Phone #2 */}
            <img
              src="assets/eira-app-mobile-2.svg"
              alt="App screen 2"
              className="
    absolute bottom-1/4 right-1
    w-[clamp(10rem,35%,16rem)]     /* ↓ phones & small tablets */
    sm:w-[clamp(12rem,45%,20rem)]  /* ≥ 640 px  restore original range */
    rotate-6
  "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
