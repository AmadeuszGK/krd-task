import React from "react";
import "./App.scss";
import DebtsList from "./DebtsList/DebtsList";
import Counter from "./Counter/Counter";
import Filter from "./Filter/Filter";
import spinner from "./spinner.gif"

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      debtsList: [],
      debtsAmount: "",
      loading: false,
      inputValue: ""
    };
  }

  onInputValue = inputValue => {
    this.setState({
      inputValue: inputValue
    });
  };

  filterList = () => {
    this.setState({ loading: true });

    fetch(
      "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetFilteredDebts",
      {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.inputValue)
      }
    )
      .then(res => res.json())
      .then(json => this.setState({ debtsList: json, loading: false }))
      .catch(error => alert("Wpisz conajmniej 3 znaki!"));
  };

  componentDidMount() {
    fetch("http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts")
      .then(res => res.json())
      .then(json => this.setState({ debtsList: json }));

    fetch(
      "http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount"
    )
      .then(res => res.json())
      .then(json => this.setState({ debtsAmount: json }));
  }

  render() {
    return (
      <main>

        <header>
          <div className="container">
            <div className="col-12 row header-container">
              <div className="filter">
                <p className="filter__title">
                  Podaj numer sprawy, nazwę lub NIP dłużnika:
                </p>
                <Filter
                  inputValue={this.onInputValue}
                  filterList={this.onFilterList}
                  passedFunction={this.filterList}
                />
                <p className="filter__tip">*wpisz conajmniej 3 znaki</p>
              </div>
              <Counter debtsAmount={this.state.debtsAmount} />
            </div>
          </div>
        </header>
        
        <section>
          <div className="container">
            <div
              className="col-12 row debts-list"
              style={!this.state.loading ? {} : { display: "none" }}>
              <div className="debts-list__titles">
                <p className="column-1">dłużnik</p>
                <p className="column-2">NIP</p>
                <p className="column-3">kwota zadłużenia</p>
              </div>
              <DebtsList debtsList={this.state.debtsList} />
            </div>
            <div
              className="loader"
              style={this.state.loading ? {} : { display: "none" }}>
              <img src={spinner} className="loader__image" />
            </div>
          </div>
        </section>

      </main>
    );
  }
}

