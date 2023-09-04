import { Plus } from "@/UI/Icons";
import MeansButton from "@/UI/MeansButton";
import React, { FC } from "react";

interface Props {
  onClick: () => void;
}

const AddNewSneakerBtn: FC<Props> = ({ onClick }) => {
  return (
    <MeansButton.Func onClick={onClick}>
      <Plus /> Add new sneakers
    </MeansButton.Func>
  );
};

export default AddNewSneakerBtn;
