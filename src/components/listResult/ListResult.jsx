import SearchItem from "../searchItem/SearchItem";
import searchItem from "../../data/searchItem";

import "./ListResult.scss";

const ListResult = () => {
  console.log("hi");
  return (
    <div className="listResult">
      {searchItem.map((item) => (
        <SearchItem {...item} key={item.title} />
      ))}
    </div>
  );
};

export default ListResult;
