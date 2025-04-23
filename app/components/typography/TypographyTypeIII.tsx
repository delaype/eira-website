import React from "react";

interface TypographyTypeIIIProps {
  text1?: string;
  text2?: string;
}

export const TypographyTypeIII: React.FC<TypographyTypeIIIProps> = ({
  text1,
  text2,
}) => {
  return (
    <div className="space-y-2">
      {text1 && <p className="text-base text-black m-2">{text1}</p>}
      {text2 && <p className="text-xs text-black-40 m-2">{text2}</p>}
    </div>
  );
};
