import React from 'react'

const DebtsListItem = ({ number, name, value, nip, address, price, documentType }) => {
  return (
    <li className="debts-list__item">
      <div className="debts-list-item__name-addres column-1">
        <p className="debts-list__item__title">DŁUżNIK</p>
        <p className="debts-list__item__value">{name}</p>
        <p className="debts-list__item__title">ADRES</p>
        <p className="debts-list__item__value">{address}</p>
      </div>
      <div className="debts-list__item__nip-doctype column-2">
        <p className="debts-list__item__title">NIP</p>
        <p className="debts-list__item__value">{nip}</p>
        <p className="debts-list__item__title">RODZAJ/TYP DOKUMENTU STANOWIĄCY PODSTAWĘ DLA WIERZYTELNOŚCI</p>
        <p className="debts-list__item__value">{documentType}</p>
      </div>
      <div className="debts-list__item__value-price column-3">
        <p className="debts-list__item__title">KWOTA ZADŁUENIA</p>
        <p className="debts-list__item__value">{value}</p>
        <p className="debts-list__item__title">CENA ZADŁUENIA</p>
        <p className="debts-list-item__value">{price}</p>
      </div>
      <div className="debts-list-item__number column-4">
        <button className="debts-list__item__button">WIĘCEJ</button>
        <p className="debts-list__item__title">NUMER</p>
        <p className="debts-list__item__value">{number}</p>
      </div>
    </li>
  );
};

export default DebtsListItem;