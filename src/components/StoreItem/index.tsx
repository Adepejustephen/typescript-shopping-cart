import React from 'react'
import { StoreItemsProps } from '../../model';
import './storeitem.css'


export const StoreItem = ({ id, name, price, image }: StoreItemsProps) => {
  return <div className="card">
    <img src={image} alt={name} className="card__image" />
  </div>;
};
