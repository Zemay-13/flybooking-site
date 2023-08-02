import "./Featured.scss";
import Tbilisi from "../../assets/image/tbilisi.jpg";
import Batumi from "../../assets/image/batumi.jpg";
import Yerevan from "../../assets/image/erevan.jpg";
// import Gagra from "../../assets/image/gagra.jpg";
import Istanbul from "../../assets/image/stambul.jpg";
const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={Tbilisi} alt="Tbilisi" className="featuredImg" />
        <div className="featuredTitles">
          <h1 className="featuredTitle">Tbilisi</h1>
          <h2 className="featuredSubtitle">123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={Istanbul} alt="Tbilisi" className="featuredImg" />
        <div className="featuredTitles">
          <h1 className="featuredTitle">Istanbul</h1>
          <h2 className="featuredSubtitle">140 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={Batumi} alt="Batumi" className="featuredImg" />
        <div className="featuredTitles">
          <h1 className="featuredTitle">Batumi</h1>
          <h2 className="featuredSubtitle">145 properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src={Yerevan} alt="Erevan" className="featuredImg" />
        <div className="featuredTitles">
          <h1 className="featuredTitle">Yerevan</h1>
          <h2 className="featuredSubtitle">174 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
