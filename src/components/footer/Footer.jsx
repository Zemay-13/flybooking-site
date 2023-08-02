import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="fListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes</li>
          <li className="fListItem">Apartments</li>
          <li className="fListItem">Resorts</li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places to stay</li>
          <li className="fListItem">All destinations</li>
          <li className="fListItem">All flight destinations</li>
          <li className="fListItem">All car rental locations</li>
          <li className="fListItem">Discover monthly stays</li>
          <li className="fListItem">Traveller Review Awards</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Car rental</li>
          <li className="fListItem">Flight finder</li>
          <li className="fListItem">Restaurant reservations</li>
          <li className="fListItem">Booking.com for Travel Agents</li>
        </ul>

        <ul className="fList">
          <li className="fListItem">Partner dispute</li>
          <li className="fListItem">How We Work</li>
          <li className="fListItem">Manage cookie settings</li>
          <li className="fListItem">MSA statement</li>
          <li className="fListItem">Corporate contact</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2023 Flybooking.com™.</div>
    </div>
  );
};

export default Footer;
