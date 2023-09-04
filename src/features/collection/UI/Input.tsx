import React, { FC } from "react";

interface Props {
  label: string;
  onChange?: () => void; //remove optional
  id: string;
}

const Input: FC<Props> = ({ label, onChange, id }) => {
  return (
    <div className="collection-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" onChange={onChange} />
    </div>
  );
};

export default Input;
