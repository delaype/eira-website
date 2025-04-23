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
      {text1 && <p className="text-sm text-primary-500 m-2">{text1}</p>}
      {text2 && <p className="text-4xl text-primary-900 m-2">{text2}</p>}
      {text3 && (
        <p className="text-lg font-light text-neutral-700  m-2">{text3}</p>
      )}
      {text4 && (
        <p className="text-lg font-light text-neutral-300 m-2">{text4}</p>
      )}
      {text5 && (
        <p className="text-xs font-normal text-neutral-700 m-2">{text5}</p>
      )}
    </div>
  );
};
