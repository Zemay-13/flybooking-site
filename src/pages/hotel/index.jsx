import Navbar from "../../components/navbar";
import Header from "../../components/header";
import HotelWrapper from "../../components/hotelWrapper/HotelWrapper";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

import "./Hotel.scss";
const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        <HotelWrapper />
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
