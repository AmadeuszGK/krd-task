import React from 'react'

export class Filter extends React.Component {
    state = {
        inputValue: "",
        filteredList: [],
    }



  handleChange = (event) => {
      this.setState({ inputValue: event.target.value })
      console.log('aa', this.state.inputValue)
  }

  filterItem = {
      Name: this.state.inputValue
  }

  filterList = (filterItem) => {

    fetch("http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        }, 
        //body: JSON.parse(filterItem)
        body: JSON.parse(filterItem)
    })
    .then(res => res.json())
    .then(json => this.setState({ filteredList: json }))
    .catch(error => console.error('Error:', error));

    setTimeout(() => {
        console.log('filter', this.state.filteredList)

      }, 1000);
  }

    render() {
        return (
            <div className="filter__container">
                <input className="filter__container__input" placeholder="Imię, nazwisko, NIP, numer..." value={this.state.inputValue} onChange={ this.handleChange }></input>
                <button className="filter__container__button" onClick={ this.filterList } >SZUKAJ</button>
            </div>
        );
    }
};

export default Filter;