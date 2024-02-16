import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="py-8 text-center text-gray-400 text-sm">
      &#169; 2024 koko. All Rights Reserved.
    </footer>
  );
};

export default Footer;
