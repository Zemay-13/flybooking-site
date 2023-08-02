import Navbar from "../../components/navbar";
import Header from "../../components/header/index";
import ListSearch from "../../components/listSearch/ListSearch";
import ListResult from "../../components/listResult/ListResult";

import "./List.scss";
const List = () => {
  console.log("hi");
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <ListSearch />
          <ListResult />
        </div>
      </div>
    </div>
  );
};

export default List;
