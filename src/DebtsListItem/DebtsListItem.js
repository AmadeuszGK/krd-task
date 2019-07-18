import React from 'react'

const DebtsListItem = ({ number, name, value, nip, address, price, documentType }) => {
  return (
    <li className="debts-list-item">
      <div className="debts-list-item__name-addres">
        <p className="debts-list-item__title">DŁUNIK</p>
        <p className="debts-list-item__value">{name}</p>
        <p className="debts-list-item__title">ADRES</p>
        <p className="debts-list-item__value">{address}</p>
      </div>
      <div className="debts-list-item__nip-doctype">
        <p className="debts-list-item__title">NIP</p>
        <p className="debts-list-item__value">{nip}</p>
        <p className="debts-list-item__title">RODZAJ/TYP DOKUMENTU STANOWIĄCY PODSTAWĘ DLA WIERZYTELNOŚCI</p>
        <p className="debts-list-item__value">{documentType}</p>
      </div>
      <div className="debts-list-item__value-price">
        <p className="debts-list-item__title">KWOTA ZADŁUENIA</p>
        <p className="debts-list-item__value">{value}</p>
        <p className="debts-list-item__title">CENA ZADŁUENIA</p>
        <p className="debts-list-item__value">{price}</p>
      </div>
      <div className="debts-list-item__number">
        <p className="debts-list-item__title">NUMER</p>
        <p className="debts-list-item__value">{number}</p>
      </div>
      <button className="debts-list-item__button">WIĘCEJ</button>
    </li>
  );
};

export default DebtsListItem;