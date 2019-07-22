import React from 'react';
import './App.scss';
import DebtsList from './DebtsList/DebtsList'
import Counter from './Counter/Counter'
import Filter from './Filter/Filter'


export class App extends React.Component {
  state = {
    debtsList: [],
    debtsAmount: '',
    filterdList: null,
    loading: false,
  }

  onFilterList = (debtsList) => {
    this.setState({
      debtsList: debtsList
    })
  }

  onLoading = (loading) => {
    this.setState({
      loading: loading
    })
  }

  componentDidMount() {
    fetch("http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetTopDebts")
      .then(res => res.json())
      .then(json => this.setState({ debtsList: json }));

    fetch("http://rekrutacja-webhosting.it.krd.pl/api/Recruitment/GetDebtsCount")
      .then(res => res.json())
      .then(json => this.setState({ debtsAmount: json }));

      setTimeout(() => {
        console.log('dupa', this.state.debtsList)
      }, 3000);

      setTimeout(() => {
        console.log('dupa', this.state.debtsList)
      }, 10000);
  }

  render() {
    


    return(<main>
      <header>
        <div className="container">
          <div className="col-12 row header-container">
            <div className="filter">
              <p className="filter__title">Podaj numer sprawy, nazwę lub NIP dłużnika:</p>
              <Filter filterList={this.onFilterList} loading={this.onLoading}/>
              <p className="filter__tip">*wpisz conajmniej 3 znaki</p>
            </div>
            <Counter debtsAmount={this.state.debtsAmount}/>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="col-12 row debts-list">
            <div className="debts-list__titles">
              <p className="column-1">dłużnik</p>
              <p className="column-2">NIP</p>
              <p className="column-3">kwota zadłużenia</p>
            </div>
            <DebtsList debtsList={this.state.debtsList}/>
          </div>
        </div>
      </section>
    </main>)
  }
}

export default App;
