import { Link } from "react-router-dom";

import "./SearchItem.scss";
import "../../styles/base.scss";

const SearchItem = ({ title, imgUrl, rating, price }) => {
  return (
    <div className="siItem">
      <img src={imgUrl} alt="" className="siImg" />

      <div className="siDesc">
        <Link to="hotel" className="siTitle">
          {title}
        </Link>
        <span className="siDistance">500m from distance</span>
        <span className="siTaxiOp">Free airport Taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailsText">
          <span className="siPrice"> ${price}</span>
          <span className="siTaxiOp">Includes taxes and fees</span>
          <button className="siCheckBtn btnHover">
            <Link to="hotel" className="siCheckLink">
              See availability
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
