import { Search as SearchIcon } from "@/UI/Icons/Search";

const Search = () => {
  return (
    <div className="collection-search">
      <SearchIcon />
      <input placeholder="Search" type="text" />
    </div>
  );
};

export default Search;
