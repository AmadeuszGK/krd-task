import React from 'react';
import './App.css';
import DebtsList from './DebtsList/DebtsList'
import Counter from './Counter/Counter'

export class App extends React.Component {
  state = {
    debtsList: [],
    debtsAmount: ''
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
  }

  render() {
    return(<div>
      <Counter debtsAmount={this.state.debtsAmount}/>
      <DebtsList debtsList={this.state.debtsList}/>
    </div>)
  }
}

export default App;
