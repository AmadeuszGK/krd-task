import React from "react";

export class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      filteredList: [],
      loading: false
    };
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
    this.props.inputValue(this.state.inputValue);
  };

  render() {
    return (
      <div className="filter__container">
        <input
          className="filter__container__input"
          placeholder="Imię, nazwisko, NIP, numer..."
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button
          className="filter__container__button"
          onClick={this.props.passedFunction}
        >
          SZUKAJ
        </button>
      </div>
    );
  }
}

export default Filter;
