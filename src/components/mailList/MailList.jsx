import "./MailList.scss";
import "../../styles/base.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money!</h1>
      <h2 className="mailSubtitle">
        Sign up and we'll send the best deals to you
      </h2>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button className="btnHover">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
