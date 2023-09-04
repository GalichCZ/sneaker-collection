import CollectionHeader from "../UI/CollectionHeader";
import Search from "../UI/Search";
import Drawer from "./Drawer";

const CollectionHead = () => {
  return (
    <div className="collection-head">
      <CollectionHeader />
      <div>
        <Search />
        <Drawer />
      </div>
    </div>
  );
};

export default CollectionHead;
