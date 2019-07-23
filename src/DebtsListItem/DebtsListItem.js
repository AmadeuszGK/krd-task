import React from "react";

export default class DebtsListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      itemClass: "debts-list__item"
    };
  }
  

  showMore() {
    let allItems = document.querySelectorAll(".debts-list__item");
    console.log("allItems", allItems)
    allItems.forEach(el => el.classList.remove("debts-list__item--focus"));

    this.setState({
      itemClass: "debts-list__item debts-list__item--focus"
    });

  }

  showLess() {
    this.setState({
      itemClass: "debts-list__item"
    });
  }

  render() {
    return (
      <li className={this.state.itemClass}>
        <div className="debts-list-item__name-addres column-1">
          <p className="debts-list__item__title">DŁUżNIK</p>
          <p className="debts-list__item__value">{this.props.name}</p>
          <p className="debts-list__item__title">ADRES</p>
          <p className="debts-list__item__value">{this.props.address}</p>
        </div>
        <div className="debts-list__item__nip-doctype column-2">
          <p className="debts-list__item__title">NIP</p>
          <p className="debts-list__item__value">{this.props.nip}</p>
          <p className="debts-list__item__title">
            RODZAJ/TYP DOKUMENTU STANOWIĄCY PODSTAWĘ DLA WIERZYTELNOŚCI
          </p>
          <p className="debts-list__item__value">{this.props.documentType}</p>
        </div>
        <div className="debts-list__item__value-price column-3">
          <p className="debts-list__item__title">KWOTA ZADŁUENIA</p>
          <p className="debts-list__item__value">{this.props.value}</p>
          <p className="debts-list__item__title">CENA ZADŁUENIA</p>
          <p className="debts-list__item__value">{this.props.price}</p>
          <p className="debts-list__item__title">NUMER</p>
          <p className="debts-list__item__value">{this.props.number}</p>  
        </div>
        <div className="debts-list-item__number column-4">
          <button
            className="debts-list__item__button debts-list__item__button--more"
            onClick={this.showMore.bind(this)}
          >
            WIĘCEJ
          </button>
          <button
            className="debts-list__item__button debts-list__item__button--less"
            onClick={this.showLess.bind(this)}
          >
            MNIEJ
          </button>
        </div>
      </li>
    );
  }
}
