import React from 'react';

function Cart({ corzina, setCorzina }) {


  const delite = (id)=>{
    setCorzina(
      corzina.filter((item, idx)=>{
        return idx!== id
      })
    )

  }


  return (
    <div className='Cart'>
      <div className='container'>
        <table className='Cart__table' border={1}>
        <thead>
          <tr>
            <th>называние</th>
            <th>количество</th>
            <th>цена</th>
          </tr>
        </thead>
        <tbody>
          {corzina.map((el, idx) => (

            <tr key={el.id}>
              <td>{el.title}</td>
              <td>{el.count}</td>
              <td>{el.price}$</td>
              <td>
                <button onClick={()=>delite(idx)}>Удалить</button>
                </td>
            </tr>
          )
          )}

            <tr>
              <th>итоговая сумма</th>            
              <td colSpan={3}>{corzina.reduce((acc, rec)=>acc+rec.price,0)}$</td>
            </tr>

        </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart