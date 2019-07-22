import React from 'react'

export class Filter extends React.Component {
    state = {
        inputValue: "",
        filteredList: [],
        loading: false
    }



  handleChange = (event) => {
      this.setState({ inputValue: event.target.value })
      console.log('inputValue', this.state.inputValue)
  }

  filterList = () => {
    this.setState(prevState => ({ loading: !prevState.loading }))
    this.props.filterList(this.state.filteredList)
    this.props.loading(this.state.loading)
    console.log("loading", this.state.loading)

    fetch("http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts", {
        method: "post",
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(this.state.inputValue)
    })
    .then(res => res.json())
    .then(json => this.setState({ filteredList: json }))
    // .then(this.setState({ loading: false }))
    .catch(error => alert("Wpisz conajmniej 3 znaki!"));

    setTimeout(() => {
        console.log('filter', this.state.filteredList)
      }, 1000);
      setTimeout(() => {
        console.log('filter', this.state.filteredList)
      }, 4000);
    this.props.filterList(this.state.filteredList)
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