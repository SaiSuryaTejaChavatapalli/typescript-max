import { type ReactNode, type FC } from "react";

type HeaderProps = {
  children: ReactNode;
  image: { src: string; alt: string };
};

const Header: FC<HeaderProps> = ({ children, image }) => {
  return (
    <>
      <img src={image.src} alt={image.alt} />
      {children}
    </>
  );
};

export default Header;
