import { FC, ReactNode } from "react";
import Link from "./MeansLinkButton";

interface Props {
  children: ReactNode;
  className?: string;
  onClick: () => void;
}

const Func: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`means-button ${className}`}>
      {children}
    </button>
  );
};

const MeansButton = {
  Func,
  Link,
};

export default MeansButton;
