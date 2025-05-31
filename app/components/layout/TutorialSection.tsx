//import { TypographyTypeIII } from "../typography/TypographyTypeIII";

import { useEffect, useState } from "react";
import { TypographyTypeI } from "../typography/TypographyTypeI";
import { TypographyTypeIII } from "../typography/TypographyTypeIII";

interface TutorialSectionProps {
  isStudent: boolean;
}

const TUTOR_STEPS = [
  [
    "Signup",
    "Create your account and register yourself as a KYC verified tutor.",
  ],
  [
    "Add Bank Account Details",
    "Add your bank account details to enable instant settlement of your payments.",
  ],
  [
    "Add Classes",
    "Add your online or offline sessions with your students for which you want to receive payments.",
  ],
  [
    "Get Paid Instantly",
    "Share the payment link with your students for this class and they can pay you directly through the link via upi or credit card",
  ],
  [
    "Send it to any student",
    "Students don't need to have an Eira account to pay you. They can pay you directly via the payment link.",
  ],
];

const STUDENT_STEPS = [
  [
    "Signup",
    "Signup now and send payments to your tutors on Eira via Credit Card.",
  ],
  [
    "Find your tutor",
    "Search for your tutor on Eira. You can add classes and pay them immediately via Credit Card.",
  ],
  [
    "Cant' find your tutor?",
    "Ask them to sign up on Eira and become KYC verified tutors. Post verification you can find and pay them.",
  ],
  [
    "Send verification request",
    "You can still use credit to pay them. Add their phone number, bank account details and initiate the settlement process by making a payment. This will send them a verification request.",
  ],
  [
    "Tutors receive an sms alert for KYC verification",
    "Tutors need to verify their KYC details to receive payments.",
  ],
  [
    "Settlement of payments",
    "Post KYC verification, your money is settled in their bank account instantly.",
  ],
];
export default function TutorialSection({ isStudent }: TutorialSectionProps) {
  const [activeSteps, setActiveSteps] = useState(STUDENT_STEPS);

  useEffect(() => {
    if (isStudent) {
      setActiveSteps(STUDENT_STEPS);
    } else {
      setActiveSteps(TUTOR_STEPS);
    }
  }, [isStudent]);
  return (
    <section className="py-16 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
        {/* ───────────── Left column ───────────── */}
        <div>
          <TypographyTypeI
            text1="How it works"
            text2="Payment for classes made easy via Credit Card"
            text3={
              isStudent
                ? "If you're a student, then follow these steps to pay your tutors via Credit Card."
                : "If you're a tutor, then follow these steps so that your students can pay you via Credit"
            }
          />

          <ul className="space-y-8 mt-10">
            {activeSteps.map(([title, desc], idx) => (
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
