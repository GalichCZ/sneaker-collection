import CollectionCards from "./CollectionCards";
import CollectionHead from "./CollectionHead";
import RadioComponent from "./RadioComponent";

const Collection = () => {
  return (
    <div className="collection">
      <CollectionHead />
      <RadioComponent />
      <CollectionCards />
    </div>
  );
};

export default Collection;
