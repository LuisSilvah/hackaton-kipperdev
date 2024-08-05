import { FilterIconProps } from "@/app/types";
import React from "react";

export function DrawPointIcon(props: FilterIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
      fill="none"
      viewBox="0 0 45 45"
    >
      <path fill="url(#pattern0_11_27)" d="M0 0H45V45H0z"></path>
      <defs>
        <pattern
          id="pattern0_11_27"
          width="1"
          height="1"
          patternContentUnits="objectBoundingBox"
        >
          <use transform="scale(.01111)" xlinkHref="#image0_11_27"></use>
        </pattern>
        <image
          id="image0_11_27"
          width="90"
          height="90"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </defs>
    </svg>
  );
}

