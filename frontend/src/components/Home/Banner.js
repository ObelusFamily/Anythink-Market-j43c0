import React from "react";
import agent from "../../agent";
import logo from "../../imgs/logo.png";
import { APPLY_TITLE_FILTER } from "../../constants/actionTypes";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch) => {
  return {
    updateItems: (payload) =>
      dispatch({ type: APPLY_TITLE_FILTER, payload: payload }),
  };
};

const Banner = (props) => {
  const [searchText, setSearchText] = React.useState("");

  const handleUpdateSearchInput = async (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length >= 3) {
      console.log("searching for items with title: ", e.target.value);
      const items = await agent.Items.byTitle(e.target.value);
      console.log("items: ", items);
      props.updateItems(items);
    }
  };

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span id="get-part">A place to get</span>
          <div className="search-box-wrapper">
            <input
              id="search-box"
              value={searchText}
              onChange={handleUpdateSearchInput}
              placeholder={"What is it that you truly desire?"}
            />
            <img
              src={
                "https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"
              }
              alt="magnifying glass icon"
            />
          </div>
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Banner);
