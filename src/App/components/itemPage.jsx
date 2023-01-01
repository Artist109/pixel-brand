import React from "react";

const ItemPage = ({match, items, onAdd}) => {

  const itemId = match.params.itemId
 
  if (items) {
    console.log('items', Array.isArray(items))
    items.map(item => console.log(item))
    const getItem = (itemId) => items.find(({id}) => String(id) === itemId)
    const item = getItem(itemId)
    return (
      <div>
        <div className="row ml-5">
          <div className="col-md-4" style={{ marginLeft: "50px"}}>
            <img style={{ width: "350px"}} src={item.image} alt={item.title}></img>
          </div>
          <div className="col-md-4">
            <div className="row">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Бренд: <span>{item.brand}</span></p>
                <p>Цена: <span style={{textDecoration: 'line-through'}}>{item.price}</span><span style={{fontSize: '24px', fontWeight: 'bold'}}>{'   '}{item.newPrice}</span></p>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                  onClick={()=>onAdd(item.id)}
                >
                  В корзину
                </a>
            </div>
          </div>
          <div className="col-md-8" style={{ marginLeft: "50px"}}>
          <hr />
          <h3>Характеристики</h3>
              <p>Ёмкость батареи: <span>{item.batteryCapacity}</span></p>
              <p>Время работы: <span>{item.standbyTime}</span></p>
              <p>В режиме разговора: <span>{item.talkTime}</span></p>
              <p>В режиме прослушивания: <span>{item.operatingTime}</span></p>
              <p>Время зарядки: <span>{item.chargingTime}</span></p>
          </div>
        </div>
      </div>
    )
  } 
  return '...loading'
}

export default ItemPage