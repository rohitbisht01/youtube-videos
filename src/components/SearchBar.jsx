import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
    // console.log(this.state.term);
  };

  formSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);

    // todo - make sure to call a callback from parent component
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.formSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
