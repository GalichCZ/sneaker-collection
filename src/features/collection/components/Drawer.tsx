import React, { useState } from "react";
import DrawerComponent from "@mui/material/Drawer";
import MeansButton from "@/UI/MeansButton";
import { Plus } from "@/UI/Icons";
import CollectionForm from "./CollectionForm";
import AddNewSneakerBtn from "../UI/AddNewSneakerBtn";

const Drawer = () => {
  const [open, setOpen] = useState(false);

  const drawerHandle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="collection-drawer">
      <AddNewSneakerBtn onClick={drawerHandle} />
      <DrawerComponent open={open} onClose={drawerHandle} anchor="right">
        <CollectionForm />
      </DrawerComponent>
    </div>
  );
};

export default Drawer;
