import React from "react";

type SchoolCrestProps = {
  className?: string;
};

const SchoolCrest: React.FC<SchoolCrestProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="32" cy="32" r="30" fill="#F4EEE2" stroke="#074B70" strokeWidth="4" />
    <path d="M32 14 L52 24 L32 34 L12 24 Z" fill="#074B70" stroke="#C2B280" strokeWidth="2" />
    <text x="32" y="44" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#C2B280" fontFamily="serif">MS</text>
  </svg>
);

export default SchoolCrest; 