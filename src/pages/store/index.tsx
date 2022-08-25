import React from 'react'
import { StoreItem } from '../../components';
import { items } from '../../data/items';
import './store.css'

export const Store = () => {
  return (
    <main className="store">
      <section className="store__container">
        {items.map((item) => (
          <div className="store__item" key={item.id}>
            <StoreItem {...item} />
          </div>
        ))}
      </section>
    </main>
  );
}
