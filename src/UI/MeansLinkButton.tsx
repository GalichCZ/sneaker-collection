import { FC, ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";

interface Props {
  children: ReactNode;
  className?: string;
  path: string;
}

const Link: FC<Props> = ({ className, children, path }) => {
  return (
    <ReactLink to={path}>
      <button className={`means-button ${className}`}>{children}</button>;
    </ReactLink>
  );
};

export default Link;
