import React from 'react'

export class Filter extends React.Component {
    state = {
        inputValue: "",
    }



    handleChange({ value }) {
        this.setState({
            inputValue: value
        });
      }

    render() {
        return (
            <div className="filter__container">
                <input className="filter__container__input" placeholder="Imię, nazwisko, NIP, numer..." value={this.state.inputValue} onChange={ this.handleChange }></input>
                <button className="filter__container__button" onClick={this.props.filterText.bind(null, this.state.inputValue)} >SZUKAJ</button>
            </div>
        );
    }
};

export default Filter;