import { useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

import "./ListSearch.scss";
import { DateRange } from "react-date-range";

const ListSearch = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div className="listSearch">
      <h1 className="lsSearch">Search</h1>
      <div className="lsItem">
        <label>Destination</label>
        <input type="text" value={destination} placeholder="destination" />
      </div>
      <div className="lsItem">
        <label>Check-in-Date</label>
        <span onClick={() => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "MM/dd/yyyy"
        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDate && (
          <DateRange
            onChange={(item) => setDate([item.selection])}
            minDate={new Date()}
            ranges={date}
          />
        )}
      </div>
      <div className="lsItem">
        <label>Options</label>
        <div className="lsOptions">
          <div className="lsOptionItem">
            <span className="lsOptionText">
              Min price <small>per night</small>
            </span>
            <input type="number" className="lsOptionInput" />
          </div>

          <div className="lsOptionItem">
            <span className="lsOptionText">
              Max price <small>per night</small>
            </span>
            <input type="number" className="lsOptionInput" />
          </div>

          <div className="lsOptionItem">
            <span className="lsOptionText">Adult</span>
            <input
              type="number"
              className="lsOptionInput"
              placeholder={options.adults}
              min={1}
            />
          </div>

          <div className="lsOptionItem">
            <span className="lsOptionText">Children</span>
            <input
              type="number"
              className="lsOptionInput"
              placeholder={options.children}
              min={0}
            />
          </div>

          <div className="lsOptionItem">
            <span className="lsOptionText">Room</span>
            <input
              type="number"
              className="lsOptionInput"
              placeholder={options.room}
              min={1}
            />
          </div>
        </div>
      </div>
      <button className="searchBtn">Search</button>
    </div>
  );
};

export default ListSearch;
