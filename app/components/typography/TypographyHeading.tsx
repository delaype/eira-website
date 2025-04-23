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
    <div className="space-y-2">
      {text1 && <p className="text-3xl text-primary-900 m-2">{text1}</p>}
      {text2 && <p className="text-xs text-neutral-500 m-2">{text2}</p>}
    </div>
  );
};
