// GoogleSvg.tsx
import React from "react";

interface GoogleSvgProps extends React.SVGProps<SVGSVGElement> {}

const GoogleSvg: React.FC<GoogleSvgProps> = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className={className}
    {...props}
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
    />
    <path
      fill="#34A853"
      d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.51 21.3 7.68 24 12.255 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.525 14.58c-.25-.72-.38-1.49-.38-2.28 0-.79.14-1.56.38-2.28V7.93h-3.98c-.44 1.19-.69 2.48-.69 3.79 0 1.31.25 2.59.69 3.79l3.98-3.02z"
    />
    <path
      fill="#EA4335"
      d="M12.255 4.59c1.77 0 3.35.63 4.6 1.85l3.42-3.42C18.21 1.09 15.47 0 12.255 0 7.68 0 3.51 2.7 1.53 6.62l3.98 3.09c.94-2.85 3.59-4.96 6.73-4.96z"
    />
  </svg>
);

export default GoogleSvg;