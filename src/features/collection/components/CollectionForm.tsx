import React from "react";
import AddNewSneakerBtn from "../UI/AddNewSneakerBtn";
import Input from "../UI/Input";

const CollectionForm = () => {
  return (
    <div className="collection-form">
      <h1>Add sneakers to your collection</h1>
      <form>
        <Input id="name" label="Name" />
        <Input id="brand" label="Brand" />
        <Input id="price" label="Price" />
        <Input id="sizeus" label="Size US" />
        <Input id="year" label="Year" />
        <AddNewSneakerBtn onClick={() => {}} />
      </form>
    </div>
  );
};

export default CollectionForm;
