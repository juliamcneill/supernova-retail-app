import React from "react";

import { FaSearch } from "react-icons/fa";

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div id="nav-bar">
        <span id="logo" tabIndex="0">
          Supernova
        </span>
        <span id="main-search">
          <label class="hidden" for="search-bar">
            Search the entire site
          </label>
          <input
            type="text"
            name="search"
            id="search-bar"
            title="Search the entire site"
            tabIndex="0"
            value={this.state.search}
            onChange={(event) => this.handleFormChange(event)}
          ></input>
          <span type="submit" className="search-icon" tabIndex="0">
            <FaSearch />
          </span>
        </span>
      </div>
    );
  }
}

export default NavigationBar;
