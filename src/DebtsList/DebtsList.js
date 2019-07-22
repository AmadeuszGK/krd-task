import React from 'react'
import DebtsListItem from '../DebtsListItem/DebtsListItem'

export default class DebtsList extends React.Component {
 
  debtsListToDebtsListItem = debtsList => {
    const key = debtsList.Id;
    const number = debtsList.Number;
    const name = debtsList.Name;
    const value = debtsList.Value;
    const nip = debtsList.NIP;
    const address = debtsList.Address;
    const price = debtsList.Price;
    const documentType = debtsList.DocumentType;

    return <DebtsListItem key={key} number={number} name={name} value={value} nip={nip} address={address} price={price} documentType={documentType}/>;
  };

  render() {
    return (
      <ul className="debts-list__items">
        {this.props.debtsList.map(this.debtsListToDebtsListItem)}
      </ul>
    );
  }
}
