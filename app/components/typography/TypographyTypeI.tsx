import React from "react";

interface TypographyTypeIProps {
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
}

export const TypographyTypeI: React.FC<TypographyTypeIProps> = ({
  text1,
  text2,
  text3,
  text4,
  text5,
}) => {
  return (
    <div className="space-y-2">
      {/* tiny badge / eyebrow */}
      {text1 && (
        <p className="text-[16px] sm:text-sm text-primary-500 m-2">{text1}</p>
      )}

      {/* hero / headline */}
      {text2 && (
        <p className="text-[29px] sm:text-4xl text-primary-900 m-2">{text2}</p>
      )}

      {/* sub-heading */}
      {text3 && (
        <p className="text-[19px] sm:text-lg font-light text-neutral-700 m-2">
          {text3}
        </p>
      )}

      {/* sub-heading alt colour */}
      {text4 && (
        <p className="text-[19px] sm:text-lg font-light text-neutral-300 m-2">
          {text4}
        </p>
      )}

      {/* fine print / caption */}
      {text5 && (
        <p className="text-[14px] sm:text-xs font-normal text-neutral-700 m-2">
          {text5}
        </p>
      )}
    </div>
  );
};
