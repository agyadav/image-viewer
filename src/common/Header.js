import * as React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Input, InputAdornment, IconButton } from "@material-ui/core";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false
    };
  }
  handleChange(e) {
    this.props.onFilter(e.target.value);
  }
  toggleDropdown = () => {
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });
    }
  };
  goToProfile = () => {
    window.location = "/profile";
  };
  logout = () => {
    sessionStorage.removeItem("accessToken");
    window.location = "/";
  };
  render() {
    const { homepageHeader, url, goToHome } = this.props;
    return (
      <React.Fragment>
        {homepageHeader ? (
          <div className="logo-home">
            {goToHome ? (
              <a href="/home" className="profile-page-logo">
                Image Viewer
              </a>
            ) : (
              <span>Image Viewer</span>
            )}
            <div className="search-profile-wrapper">
              <Input
                id="username"
                type="search"
                className="search"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
                placeholder="Search..."
                onChange={e => this.handleChange(e)}
              />
              <IconButton
                aria-label="pic"
                onClick={this.toggleDropdown}
                className="pic-wrapper"
              >
                <img src={url} className="profile-pic" alt="pic" />
              </IconButton>
            </div>
          </div>
        ) : (
          <h2 className="logo">Image Viewer</h2>
        )}
      </React.Fragment>
    );
  }
}
