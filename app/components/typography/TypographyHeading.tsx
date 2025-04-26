import React from "react";

interface TypographyHeadingProps {
  text1?: string;
  text2?: string;
}

export const TypographyHeading: React.FC<TypographyHeadingProps> = ({
  text1,
  text2,
}) => {
  return (
    <div
      className="
    flex flex-col           /* make the container a flex box          */
    justify-start           /* default → left-align on mobile         */
    sm:justify-center       /* ≥ 640 px  → restore centered alignment */
    space-y-2
    w-[80%]                 /* phones: narrower width                 */
    sm:w-full               /* ≥ 640 px: full width                   */
    mx-0                    /* no horizontal auto-margin on phones    */
    sm:mx-auto              /* center horizontally again on desktop   */
  "
    >
      {/* hero / headline */}
      {text1 && (
        <p
          className="
        text-[36px]          /* phones: 36 px                    */
        leading-[44px]       /*   …with extra line-height        */
        font-semibold            /*   …and bold only on phones       */
        sm:text-3xl          /* ≥ 640 px: 60 px (token 3xl)      */
        sm:leading-[68px]    /*   …line-height from token        */
        sm:font-normal       /*   …remove bold on larger screens */
        text-primary-900
      "
        >
          {text1}
        </p>
      )}

      {/* fine-print / caption */}
      {text2 && (
        <p className="text-[14px] sm:text-xs text-neutral-500">{text2}</p>
      )}
    </div>
  );
};
