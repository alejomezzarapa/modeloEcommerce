import React from 'react';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const ItemCount = ({initial, stock, onAdd}) => {
    const [q, setQ] = useState(initial);
    const [showButton, setShowButton] = useState (false)

    let history = useNavigate();

    const addProduct = (num) => {
        setQ (q+num)
    };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button
          className="count-container__button"
          onClick={() => addProduct(-1)}
          disabled={q === initial ? true : null}
        >
          -
        </button>
        <span className="count-container__qty">{q}</span>
        <button
          className="count-container__button"
          onClick={() => addProduct(+1)}
          disabled={q === stock ? true : null}
        >
          +
        </button>
      </div>

      <button
        className="button-primary"
        onClick={() => {onAdd(q); setShowButton(true)}}
        disabled={stock === 0 ? true : null}
      >
        Añadir
      </button>
      { (showButton && history.location.pathname.includes('/detail') ) && <button
        onClick={()=>{history.push('/cart')}}
        className="button-primary button-finalizar-compra"
      >
        Finalizar compra
      </button>}
    </div>
  );
};

export default ItemCount;