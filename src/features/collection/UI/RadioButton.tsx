import { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  label: string;
  className: string;
}

const RadioButton: FC<Props> = ({ icon, label, className }) => {
  return (
    <button className={className}>
      {icon} <p>{label}</p>
    </button>
  );
};

export default RadioButton;
